import { initializeApp } from "firebase/app";
import {collection,getDocs,getFirestore,} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8Xt0ILUMYJYDJh92hqqsfbZhuQl8COEE",
  authDomain: "neog-kwiz.firebaseapp.com",
  projectId: "neog-kwiz",
  storageBucket: "neog-kwiz.appspot.com",
  messagingSenderId: "665753271394",
  appId: "1:665753271394:web:d26f5261a3a13028e7253b"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);

// init service
const db=getFirestore(app);
const demonSlayerDb=collection(db,"demonSlayer")
const hunterDb=collection(db,"hunter")
const narutoDb=collection(db,"naruto")


//auth
const auth=getAuth(app);

export {db,demonSlayerDb,hunterDb,narutoDb,auth}