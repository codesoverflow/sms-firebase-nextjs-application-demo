// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzBkVNKCzzGe_Uy5Y3zwHN35utKZL23eY",
  authDomain: "fir-sms-application-cf94d.firebaseapp.com",
  projectId: "fir-sms-application-cf94d",
  storageBucket: "fir-sms-application-cf94d.appspot.com",
  messagingSenderId: "344200945182",
  appId: "1:344200945182:web:afd3bff5309161a064980f",
  measurementId: "G-6SWX48T8RX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

