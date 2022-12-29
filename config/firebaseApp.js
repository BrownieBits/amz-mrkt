import { initializeApp } from "firebase/app";
import { getAnalytics,isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkfZAiMEadyCYen_6AZm5X-Y6Ohe2r7V0",
  authDomain: "test-94a33.firebaseapp.com",
  projectId: "test-94a33",
  storageBucket: "test-94a33.appspot.com",
  messagingSenderId: "245094367104",
  appId: "1:245094367104:web:e6f9f926da86c1ff278b65",
  measurementId: "G-NVGYQE5B88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export const initFirebase = () => {
    return app;
}