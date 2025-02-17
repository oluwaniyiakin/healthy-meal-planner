import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Sign Up Function
document.getElementById("signup-btn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign-up successful! Welcome, " + userCredential.user.email);
        document.getElementById("logout-btn").style.display = "block";
    } catch (error) {
        alert("Error: " + error.message);
    }
});

// Login Function
document.getElementById("login-btn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful! Welcome back, " + userCredential.user.email);
        document.getElementById("logout-btn").style.display = "block";
    } catch (error) {
        alert("Error: " + error.message);
    }
});

// Logout Function
document.getElementById("logout-btn").addEventListener("click", async () => {
    try {
        await signOut(auth);
        alert("You have logged out.");
        document.getElementById("logout-btn").style.display = "none";
    } catch (error) {
        alert("Error: " + error.message);
    }
});
