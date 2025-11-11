import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC76fgihbrZZ7dz_xT87UgvQpSU3MzcWaM",
  authDomain: "famiapp-e2fe5.firebaseapp.com",
  projectId: "famiapp-e2fe5",
  storageBucket: "famiapp-e2fe5.firebasestorage.app",
  messagingSenderId: "881241876013",
  appId: "1:881241876013:web:876ea80f20554b01e7faa4",
  measurementId: "G-XBGB80FNKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
