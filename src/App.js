// src/App.js

import './App.css';
import AllRoutes from './Components/AllRoutes';
import { generateToken } from "./firebase";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Request user permission and generate token
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          await generateToken(); // Call the function to generate the token
        } else {
          alert("You denied notifications.");
        }
      } catch (error) {
        console.error("Error requesting permission or generating token:", error);
      }
    };

    requestPermission();
  }, []);

  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
