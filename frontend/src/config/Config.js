
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBOdm0ctnm5eMREfRg9RWSJFQBTYTaMLWE",
  authDomain: "fitmate-a85ae.firebaseapp.com",
  projectId: "fitmate-a85ae",
  storageBucket: "fitmate-a85ae.appspot.com",
  messagingSenderId: "409254064956",
  appId: "1:409254064956:web:b52c3864ffccde3d56a439"
};


const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)