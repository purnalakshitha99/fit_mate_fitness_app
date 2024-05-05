import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdUSJrfRWJ2bDg6TcbOfIyNduJ-hXQ4hk",
  authDomain: "fitmate-4637e.firebaseapp.com",
  projectId: "fitmate-4637e",
  storageBucket: "fitmate-4637e.appspot.com",
  messagingSenderId: "298643815723",
  appId: "1:298643815723:web:97fb7ad585625839d3196e",
};

export const app = initializeApp(firebaseConfig);
