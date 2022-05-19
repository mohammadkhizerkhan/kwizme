import { userDb } from "../firebase/config";
import {
  addDoc,
  doc,
  onSnapshot,
  query,
  where,
  collection,
  setDoc,
  getDoc,
} from "firebase/firestore";

const getUserScore=(user)=>{
  return getDoc(doc(userDb, user.uid)).data();
}

const AddUserScore = (colName, score, user) => {
  // console.log(getUserScore(user))
};

export { AddUserScore };

// setDoc(
  //   doc(userDb, user.uid),
  //   {
  //     uid: user.uid,
  //     score: score,
  //     category: colName,
  //   },
  //   { merge: true }
  // );