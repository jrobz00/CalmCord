import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfhjIVFQWEpkBEgKHq9YgH-nUd6dV3sHU",
  authDomain: "calmcord.firebaseapp.com",
  projectId: "calmcord",
  storageBucket: "calmcord.firebaseapp.com",
  messagingSenderId: "389842486941",
  appId: "1:389842486941:web:f1845b527ddcbe138b3674",
  measurementId: "G-T84KN1T608",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLoginMode) {
        // Login
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        console.log("Login Successful:", userCredential.user);
        alert("Login Successful!");
        navigate("/dashboard");
      } else {
        // Registration
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        // Update username
        await updateProfile(user, { displayName: formData.username });
        console.log("Registration Successful:", user);
        alert("Registration Successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Auth Error:", error.message);
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("This email is already registered.");
          break;
        case "auth/weak-password":
          alert("Password should be at least 6 characters.");
          break;
        case "auth/invalid-email":
          alert("Invalid email format.");
          break;
        case "auth/configuration-not-found":
          alert("Firebase Authentication is not configured. Please check your Firebase project.");
          break;
        default:
          alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e2124] to-[#292b2f] flex items-center justify-center">
      <div className="bg-[#2c2f33] p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-[#7dd3fc] mb-6">
          {isLoginMode ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <div className="mb-4">
              <label className="block text-gray-300 font-semibold mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-[#1e2124] text-gray-300 border border-[#424549] rounded focus:outline-none focus:border-[#7dd3fc]"
                required={!isLoginMode}
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-300 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#1e2124] text-gray-300 border border-[#424549] rounded focus:outline-none focus:border-[#7dd3fc]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#1e2124] text-gray-300 border border-[#424549] rounded focus:outline-none focus:border-[#7dd3fc]"
              required
            />
          </div>

          {!isLoginMode && (
            <div className="mb-4">
              <label className="block text-gray-300 font-semibold mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-[#1e2124] text-gray-300 border border-[#424549] rounded focus:outline-none focus:border-[#7dd3fc]"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#7dd3fc] text-white py-2 px-4 rounded hover:bg-[#5daddb] transition duration-300"
          >
            {isLoginMode ? "Login" : "Register"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-400">
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="text-[#7dd3fc] hover:underline focus:outline-none"
            >
              {isLoginMode ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
