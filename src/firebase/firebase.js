import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5rxoANTxtT0_28T8kC__R75_fmOSlGyI",
  authDomain: "weather-app-a734d.firebaseapp.com",
  projectId: "weather-app-a734d",
  storageBucket: "weather-app-a734d.appspot.com",
  messagingSenderId: "752073457949",
  appId: "1:752073457949:web:f46cb540c0d665667621f4",
  measurementId: "G-T4M84Z88F6"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
