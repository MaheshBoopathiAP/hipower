import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPDHFF4d36-PcUKrWYhDBIxCnMYJgb7WE",
  authDomain: "hipower-8878f.firebaseapp.com",
  projectId: "hipower-8878f",
  storageBucket: "hipower-8878f.appspot.com",
  messagingSenderId: "1052028680927",
  appId: "1:1052028680927:web:90c42d6065cd81fdab876a",
  measurementId: "G-7D2B9P8E04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth;