/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosUrl from "../hooks/useAxiosUrl";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
// import axios from "axios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const axios = useAxiosUrl();
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProbider = new GithubAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProbider);
  };
  const signInOut = () => {
    return signOut(auth);
  };
  const updateUser = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post("http://localhost:5173/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axios
          .post("http://localhost:5173/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    createUser,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    signInOut,
    user,
    updateUser,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
