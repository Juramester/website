// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC--ms0hVEWIhIAqJi69N1bxdOAkyDNPQE",
  authDomain: "furniture-web-site.firebaseapp.com",
  projectId: "furniture-web-site",
  storageBucket: "furniture-web-site.appspot.com",
  messagingSenderId: "659206735853",
  appId: "1:659206735853:web:6ed4edf12a1f6f002149e4"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;
