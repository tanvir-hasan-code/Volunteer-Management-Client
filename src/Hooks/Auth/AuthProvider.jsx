import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Auth/Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
	
	const signOutUser = () => {
		return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const userInfo = {
    user,
    setUser,
    createUser,
    signInUsers,
    signInWithGoogle,
    loading,
	  setLoading,
	signOutUser,
  };

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center bg-[#1b2227] min-h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
