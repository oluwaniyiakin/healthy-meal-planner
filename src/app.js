import { auth } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from "firebase/auth";

// DOM Elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

// Sign Up Function
signupBtn.addEventListener("click", async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
        alert(`Welcome, ${userCredential.user.email}`);
    } catch (error) {
        alert(error.message);
    }
});

// Login Function
loginBtn.addEventListener("click", async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
        alert(`Welcome back, ${userCredential.user.email}`);
    } catch (error) {
        alert(error.message);
    }
});

// Logout Function
logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    alert("Logged out successfully.");
});

// Keep User Logged In
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(`User logged in: ${user.email}`);
        logoutBtn.style.display = "block";
        signupBtn.style.display = "none";
        loginBtn.style.display = "none";
    } else {
        console.log("No user logged in");
        logoutBtn.style.display = "none";
        signupBtn.style.display = "block";
        loginBtn.style.display = "block";
    }
});
