// src/Notifications/firebase.jsx

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxemfuoAso2MOtYJEICtvY8uUJTv9yNeA",
  authDomain: "myntranotification.firebaseapp.com",
  projectId: "myntranotification",
  storageBucket: "myntranotification.appspot.com",
  messagingSenderId: "631199774571",
  appId: "1:631199774571:web:dcc41b0ac66ee3d513fe2e",
  measurementId: "G-SXPYCWNN5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Initialize Firebase Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// Function to set data in Firebase Realtime Database
const setData = (path, data) => {
  const dbRef = ref(database, path);
  set(dbRef, data);
};

// Function to generate FCM token
export const generateToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BMurvtidKI-aR-6jpRMDb8abVuQBtTwQBgVXd_1K3GJUI5NxkFTHQf3QIlgY" // Ensure this VAPID key is correct
      });
      console.log("FCM Token:", token);
    } else {
      console.warn("Notification permission denied");
    }
  } catch (error) {
    console.error("Error requesting permission or generating token:", error);
  }
};

export { app, auth, provider, database, messaging, setData };
