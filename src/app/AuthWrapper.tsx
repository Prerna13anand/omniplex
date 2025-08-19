"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// We only need setAuthState now
import { setAuthState } from "@/store/authSlice";
// The lines below are no longer needed
// import { setUserDetailsState } from "@/store/authSlice";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Temporarily bypass Firebase auth for Stripe assignment
    // This avoids the 'auth/invalid-api-key' error.
    dispatch(setAuthState(true));
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthWrapper;