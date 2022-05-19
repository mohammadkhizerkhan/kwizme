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

const getUserScore = (user) => {
  const docRef = doc(userDb,user.uid);
  const docSnap = getDoc(docRef);
  return docSnap;
};

const AddUserScore = (colName, score, user) => {
  console.log(getUserScore(user));
  // setDoc(
  //   doc(userDb, user.uid),
  //   {
  //     uid: user.uid,
  //     score: score,
  //     category: colName,
  //   },
  //   { merge: true }
  // );
};

export { AddUserScore };
