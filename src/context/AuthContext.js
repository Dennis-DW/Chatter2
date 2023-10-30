import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/auth";

// Create an AuthContext for managing authentication state
const AuthContext = React.createContext();

// Custom hook for using the authentication context
export const useAuth = () => useContext(AuthContext);

// Authentication provider component
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true); // State for loading state
  const [user, setUser] = useState(null); // State to store the authenticated user
  const history = useHistory();

  // useEffect to listen to changes in the user's authentication state
  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user); // Set the user in the state
      setLoading(false); // Mark loading as complete
      if (user) history.push("/chats"); // Redirect to the chats page if the user is authenticated
    });

    // Clean up the subscription when the component unmounts
    return unsubscribe;
  }, [history]);

  // Define the value object to provide to the AuthContext
  const value = { user };

  // Return the AuthContext Provider with the provided value
  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children when loading is complete */}
    </AuthContext.Provider>
  );
};
