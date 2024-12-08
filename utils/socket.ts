import { io, Socket } from "socket.io-client";

let socket: Socket;

export const initializeSocket = () => {
  if (!socket) {
    socket = io("http://localhost:3002", {
      transports: ["websocket"], // Ensure WebSocket transport is used
    });
  }
  return socket;
};

export const getSocket = () => {
  if (!socket) {
    throw new Error(
      "Socket.io is not initialized. Call initializeSocket() first."
    );
  }
  return socket;
};
