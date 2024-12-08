"use client";
import { useEffect } from "react";
import { useSocket } from "../contexts/SocketContext";
import { NotificationData } from "@/models/NotificationData";

export default function Notifications() {
  const socket = useSocket();

  useEffect(() => {
    // Listen for notifications
    const handleNotification = (data: NotificationData) => {
      console.log("Notification received:", data);
    };

    // Register the event listener
    socket.on("notification", handleNotification);

    // Cleanup function to remove the listener
    return () => {
      socket.off("notification", handleNotification);
    };
  }, [socket]);

  return <div>Real-time notifications here!</div>;
}
