// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7EAISTWpJ4lYAeYrTfsP8sAZUg7JZZkc",
  authDomain: "mfs-task.firebaseapp.com",
  projectId: "mfs-task",
  storageBucket: "mfs-task.appspot.com",
  messagingSenderId: "1093340716163",
  appId: "1:1093340716163:web:e86b82832add0e0d0f8fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;