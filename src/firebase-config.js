// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { getStorage } from "firebase/storage"; // If using Firebase Storage
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhmElLvtDNBKBp0H1ntSt0SdwAd_i3E4I",
  authDomain: "mealplan-3b36c.firebaseapp.com",
  projectId: "mealplan-3b36c",
  storageBucket: "mealplan-3b36c.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "413326490392",
  appId: "1:413326490392:web:7e9dc39f8bc7fd7e22bc6d",
  measurementId: "G-J9S0CV0VCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore (for user data, meal plans, etc.)
const storage = getStorage(app); // Firebase Storage (for images, files)
const analytics = getAnalytics(app); // Google Analytics

// Export Firebase modules
export { auth, db, storage, analytics };
