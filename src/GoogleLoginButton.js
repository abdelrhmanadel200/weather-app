import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  // Your Firebase configuration details go here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const GoogleLoginButton = () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      setUser(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Signed in as {user.displayName}</p>
          <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
      )}
    </div>
  );
};

export default GoogleLoginButton;
