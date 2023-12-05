import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const all = import.meta.env;
const firebaseConfig = {
  apiKey: all.VITE_apiKey,
  authDomain: all.VITE_authDomain,
  projectId: all.VITE_projectId,
  storageBucket: all.VITE_storageBucket,
  messagingSenderId: all.VITE_messagingSenderId,
  appId: all.VITE_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyDIXcg7sjFJ4aKtrsrRwOVeS1dYjS3ZH3Y",
//   authDomain: "garirdoctor.firebaseapp.com",
//   projectId: "garirdoctor",
//   storageBucket: "garirdoctor.appspot.com",
//   messagingSenderId: "653207904679",
//   appId: "1:653207904679:web:5fa43f4850d32b5d2f5682"
// };
// const app = initializeApp(firebaseConfig);
