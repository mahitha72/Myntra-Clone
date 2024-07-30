// src/index.js

import { generateToken } from "firebase";

// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/firebase-messaging-sw.js`;
    navigator.serviceWorker.register(swUrl)
      .then((registration) => {// src/Notifications/firebase.jsx

        export const generateToken = async () => {
          try {
            const permission = await Notification.requestPermission();
            if (permission === "granted") {
              const token = await getToken(messaging, {
                vapidKey: "BBVBrz4GxF3iKeg3xX1UXQH25dB7DFh9EM6I7fKh5nPKTH" // Replace with the actual VAPID key from Firebase Console
              });
              console.log("FCM Token:", token);
            } else {
              console.warn("Notification permission denied");
            }
          } catch (error) {
            console.error("Error requesting permission or generating token:", error);
          }
        };
        
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
