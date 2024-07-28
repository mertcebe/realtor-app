import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTmFU4ne226lbN9dqjyVmupZk4MThFODA",
    authDomain: "realtor-app-42e67.firebaseapp.com",
    projectId: "realtor-app-42e67",
    storageBucket: "realtor-app-42e67.appspot.com",
    messagingSenderId: "747331104412",
    appId: "1:747331104412:web:6b89541fcd8bdf398a8759",
    measurementId: "G-3JZML7SLHG"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore();

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { database as default, auth, provider }