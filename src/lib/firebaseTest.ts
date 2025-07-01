import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

try {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Optional: If you are using the Firestore emulator, uncomment the following line
  // connectFirestoreEmulator(db, 'localhost', 8080);

  console.log("Firebase initialized successfully.");

  // Attempt to connect to Firestore
  // You could try reading a document or querying a collection here to test the connection
  // For a simple connection test, just getting the Firestore instance is often enough.
  // If there are issues, they might appear when attempting an operation like getDoc or collection.

  console.log("Firestore instance obtained successfully. Connection should be active.");

} catch (error) {
  console.error("Error initializing Firebase or connecting to Firestore:", error);
}