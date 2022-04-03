// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmTEmS84kwpJ1dchq58hU9CwRsYbVbI6w",
  authDomain: "michis-cfe4f.firebaseapp.com",
  databaseURL: "https://michis-cfe4f-default-rtdb.firebaseio.com",
  projectId: "michis-cfe4f",
  storageBucket: "michis-cfe4f.appspot.com",
  messagingSenderId: "479505015753",
  appId: "1:479505015753:web:ced9d63ed8ba2bf2927e18",
  measurementId: "G-9YPL9SRZ7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);