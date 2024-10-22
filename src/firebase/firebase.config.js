import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWfE-x7DVEBjZNeExs6WY9E_JjVsEWJaU",
  authDomain: "techshop-34fe4.firebaseapp.com",
  projectId: "techshop-34fe4",
  storageBucket: "techshop-34fe4.appspot.com",
  messagingSenderId: "275788998318",
  appId: "1:275788998318:web:6befe5626a923f19a4ef3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
