import { userDb, db } from "../firebase/config";
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
import { async } from "@firebase/util";

const getUserScore = async (colName) => {
  let data;
  const docRef = doc(userDb, colName);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    data = docSnap.data();
    return data;
  }
};

const AddUserScore = async (colName, score, user) => {
  const prevData = await getUserScore(colName);
  setDoc(
    doc(db, "users", colName),
    {
      uid: user.uid,
      score: score,
      category: colName,
      userName: user.email,
    },
  );
  // if (prevData.score < score) {
  //   setDoc(
  //     doc(db, "users", colName),
  //     {
  //       uid: user.uid,
  //       score: score,
  //       category: colName,
  //       userName: user.email,
  //     },
  //     { merge: true }
  //   );
  // } 
  // else {
    
  // }
};

export { AddUserScore };
