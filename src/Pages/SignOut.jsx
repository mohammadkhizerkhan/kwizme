import React from "react";
import { useAuth } from "../context/AuthContext";

function SignOut() {
   const {user,signOutHandler,token}= useAuth();
  return (
    <div class="h-144 overflow-hidden flex items-center justify-center">
      <div class="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
        <h2 className="text-center mt-4 text-3xl">{token && user.email}</h2>
        <div className="mt-4">
          <button onClick={signOutHandler} class="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">
            SignOut
          </button>
        </div>
      </div>
    </div>
  );
}

export {SignOut};
