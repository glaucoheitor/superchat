import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase App, Authentication, Cloud Firestore and Analytics services
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAdIMbw-eDgQodDKgLy-K3ofdI2Jxj97Uo",
  authDomain: "superchat-4e1f9.firebaseapp.com",
  projectId: "superchat-4e1f9",
  storageBucket: "superchat-4e1f9.appspot.com",
  messagingSenderId: "564403556778",
  appId: "1:564403556778:web:2dd3d3579f4535817d5bd3",
  measurementId: "G-CZ4PQ8EB4C",
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
