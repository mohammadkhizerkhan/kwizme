import {
  userDb
} from "../firebase/config";
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

const AddUserScore =(score, user) => {
    console.log(score,user)
    setDoc(doc(userDb,user.uid),{
        uid:user.uid,
        score:score
    },{ merge: true })
};

export { AddUserScore };
