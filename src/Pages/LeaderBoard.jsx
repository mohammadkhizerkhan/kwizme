import {useEffect,useState} from "react";
import { db,userDb } from "../firebase/config";
import {
  addDoc,
  doc,
  onSnapshot,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";

function LeaderBoard() {
    const [leaderboardData, setLeaderboardData] = useState([])

    useEffect(() => {
        (async () => {
          try {
            const docs = await getDocs(
                userDb
            );
            const tempArr = [];
            docs.forEach((doc) => {
              tempArr.push({ ...doc.data(), id: doc.id });
            });
            setLeaderboardData(tempArr);
          } catch (error) {
            console.error("error in getting docs", error);
          }
        })();
      }, []);
      console.log(leaderboardData)

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto mt-8">
      <div className="headings flex justify-between text-2xl">
        <span>UserName</span>
        <span>Category</span>
        <span>Score</span>
      </div>
      <div className="leaderboards">
          {
              leaderboardData.map(user=>{
                  return(
                    <li
                    key={user.id}
                    className='block list-none bg-selected flex justify-between p-2 rounded mt-2 text-2xl'
                  >
                    <span>{user.uid}</span>
                    <span>{user.category}</span>
                    <span>{user.score}</span>
                  </li>
                  )
              })
          }
      </div>

    </div>
  );
}

export {LeaderBoard};
