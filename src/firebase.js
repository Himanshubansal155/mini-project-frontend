import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZPIIhVq60D8Az_Gpd1LNLPmtTQqrb3Ww",
  authDomain: "ecommerce-91e5a.firebaseapp.com",
  projectId: "ecommerce-91e5a",
  storageBucket: "ecommerce-91e5a.appspot.com",
  messagingSenderId: "479589670694",
  appId: "1:479589670694:web:1a2dd5c4eec0badc74ebe7"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
