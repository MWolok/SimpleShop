import { getDatabase } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAiPr4qwKzK75I4ds-4OF7l4me0gIno070",
    authDomain: "smple-shop-56936.firebaseapp.com",
    projectId: "smple-shop-56936",
    storageBucket: "smple-shop-56936.appspot.com",
    messagingSenderId: "685212243535",
    appId: "1:685212243535:web:af8dbdee62c3fe108e3c3a",
    measurementId: "G-8LGDP22EYC"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
  export const auth = getAuth(app);

