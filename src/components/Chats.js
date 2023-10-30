import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "./Firebase";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  // Function to handle user logout
  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  // Function to get a File from a URL
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    // Check if the user already exists on the ChatEngine platform
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-ID": "0b9f9379-8135-482e-a702-e66bddd7a4ea",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        // If the user doesn't exist, create a new user
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "private-key": "d93fdbba-ab1c-4b11-b551-084b743f320e",
              },
            })
            .then((response) => {
              console.log("User creation response: ", response.data);
              setLoading(false);
            })
            .catch((error) => console.error("User creation error: ", error));
        });
      });
  }, [user, history]);

  if (!user || loading) return "Loading...";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Chatter</div>
        <div className="logout-tab">
        <button class="Btn">
          <div className="sign" onClick={handleLogout}>
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div class="text">Logout</div>
        </button>
        </div>
    
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="0b9f9379-8135-482e-a702-e66bddd7a4ea"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;

