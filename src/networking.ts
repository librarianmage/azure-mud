import * as SignalR from "@aspnet/signalr";
import { v4 as uuidv4 } from "uuid";
import { ConnectResponse } from "../server/types";

let myUserId: string | undefined;

export interface NetworkingDelegate {
  updatedRoom: (name: string, description: string) => void;
  updatedPresenceInfo: (users: string[]) => void;
  playerJoined: (name: string) => void;
  chatMessageReceived: (name: string, message: string) => void;
}

export async function connect(delegate: NetworkingDelegate) {
  delegate = delegate;
  myUserId = uuidv4();

  const result: ConnectResponse = await callAzureFunction("connect", {
    userId: myUserId,
  });

  console.log(result);
  delegate.updatedRoom(result.roomFriendlyName, result.roomDescription);
  delegate.updatedPresenceInfo(result.roomOccupants);

  connectSignalR(myUserId, delegate);
}

async function connectSignalR(uuid: string, delegate: NetworkingDelegate) {
  class CustomHttpClient extends SignalR.DefaultHttpClient {
    public send(request: SignalR.HttpRequest): Promise<SignalR.HttpResponse> {
      request.headers = {
        ...request.headers,
        "x-ms-client-principal-id": uuid,
      };
      return super.send(request);
    }
  }

  const connection = new SignalR.HubConnectionBuilder()
    .withUrl(`https://mud.azurewebsites.net/api`, {
      httpClient: new CustomHttpClient(console),
    })
    .configureLogging(SignalR.LogLevel.Information)
    .build();

  connection.on("playerJoined", (userId) => {
    console.log("Player joined!", userId);
    delegate.playerJoined(userId);
  });

  connection.on("chat", (userId, message) => {
    console.log(userId, message);
    delegate.chatMessageReceived(userId, message);
  });

  connection.onclose(() => console.log("disconnected"));

  console.log("connecting...");
  return await connection
    .start()
    .then(() => console.log("Connected!"))
    .catch(console.error);
}

async function callAzureFunction(
  endpoint: string,
  body?: any,
  options?: Partial<RequestInit>
): Promise<any> {
  let opts = {
    method: "POST",
    credentials: "include" as RequestCredentials, // sigh
    ...options,
  };

  if (body) {
    opts.body = JSON.stringify(body);
  }

  return fetch(`https://mud.azurewebsites.net/api/${endpoint}`, opts).then(
    (r) => {
      if (r.ok) {
        console.log("Updated", r);
      } else {
        console.error("Update failed", r);
      }

      return r.json();
    }
  );
}
