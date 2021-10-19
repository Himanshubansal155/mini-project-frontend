import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAZPIIhVq60D8Az_Gpd1LNLPmtTQqrb3Ww",
  authDomain: "ecommerce-91e5a.firebaseapp.com",
  projectId: "ecommerce-91e5a",
  storageBucket: "ecommerce-91e5a.appspot.com",
  messagingSenderId: "479589670694",
  appId: "1:479589670694:web:1a2dd5c4eec0badc74ebe7"
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth();
// export const googleAuthProvider = new auth

