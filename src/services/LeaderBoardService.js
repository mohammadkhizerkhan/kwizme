import { db } from "../firebase/config";
import {
  addDoc,
  doc,
  onSnapshot,
  query,
  where,
  collection,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { async } from "@firebase/util";

const addUserScore=async(score,user)=>{
    await setDoc(doc(db,))
}

export {addUserScore}