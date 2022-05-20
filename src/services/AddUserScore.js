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
import { async } from "@firebase/util";

const getUserScore = async (uid) => {
  let data;
  const docRef = doc(userDb, uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    data = docSnap.data();
    return data;
  }
};

const AddUserScore = async (colName, score, user) => {
  const prevData = await getUserScore(user?.uid);
  console.log(user.uid)
  // if (prevData.uid && prevData.score < score) {
    setDoc(
      doc(userDb, user.uid),
      {
        uid: user.uid,
        score: score,
        category: colName,
        userName:user.email
      },
      { merge: true }
    );
  // }
  // if (!prevData.uid) {
  //   addDoc(doc(userDb, user.uid), {
  //     uid: user.uid,
  //     score: score,
  //     category: colName,
  //     userName:user.email
  //   });
  // }
};

export { AddUserScore };
