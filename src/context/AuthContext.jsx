"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const userDocRef = doc(db, 'users', authUser.uid);
        
        const unsubscribeFirestore = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUser({ ...authUser, ...userData, displayName: userData.name || authUser.email.split('@')[0] });
          } else {
            // This can happen right after signup, before the doc is created.
            // We set the basic auth user, and the app will wait for the full data.
            setUser(authUser);
          }
          setLoading(false);
        }, (error) => {
            console.error("Error fetching user data:", error);
            setUser(authUser); // Fallback to basic auth info
            setLoading(false);
        });

        return () => unsubscribeFirestore();

      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
