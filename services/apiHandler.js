import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhmElLvtDNBKBp0H1ntSt0SdwAd_i3E4I",
  authDomain: "mealplan-3b36c.firebaseapp.com",
  projectId: "mealplan-3b36c",
  storageBucket: "mealplan-3b36c.appspot.com",
  messagingSenderId: "413326490392",
  appId: "1:413326490392:web:7e9dc39f8bc7fd7e22bc6d",
  measurementId: "G-J9S0CV0VCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
