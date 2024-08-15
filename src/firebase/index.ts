// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
interface IfirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
const firebaseConfig: IfirebaseConfig = {
  apiKey: "AIzaSyB90vyYX4VU5jMDZyOKjDwtGqA_-sX0N0U",
  authDomain: "lucky-card-e68a1.firebaseapp.com",
  projectId: "lucky-card-e68a1",
  storageBucket: "lucky-card-e68a1.appspot.com",
  messagingSenderId: "354198765589",
  appId: "1:354198765589:web:604bbcb8d3185f528fce1c",
  measurementId: "G-Q7DER4X8V8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
