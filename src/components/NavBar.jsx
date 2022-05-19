import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { useAuth } from "../context";

function Navbar() {
  const { token } = useAuth();
  return (
    <div className="flex justify-between">
      <Logo />
      <Link to={"/leaderboard"} className="self-center p-3 bg-green text-grey rounded">LeaderBoard</Link>
      <Link to={token ? "/signout" : "/signup"} className="self-center">
        <div class="flex-row-center profile-logo-div">
          <svg width="3rem" height="3rem" viewBox="0 0 48 48">
            <g fill="#22c55e">
              <path
                fillRule="evenodd"
                d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                clipRule="evenodd"
              ></path>
              <path d="M12 35.63c0-1.033.772-1.906 1.8-2.02c7.715-.854 12.72-.777 20.418.019a1.99 1.99 0 0 1 1.108 3.472c-9.085 7.919-14.277 7.81-22.686.008c-.41-.38-.64-.92-.64-1.478Z"></path>
              <path
                fillRule="evenodd"
                d="M34.115 34.623c-7.637-.79-12.57-.864-20.206-.019A1.028 1.028 0 0 0 13 35.631c0 .286.119.557.32.745c4.168 3.866 7.326 5.613 10.413 5.624c3.098.011 6.426-1.722 10.936-5.652a.99.99 0 0 0-.554-1.724ZM13.69 32.616c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 1.662 5.221c-4.575 3.988-8.385 6.16-12.257 6.145c-3.883-.014-7.525-2.223-11.766-6.158A3.018 3.018 0 0 1 11 35.63a3.028 3.028 0 0 1 2.69-3.015Z"
                clipRule="evenodd"
              ></path>
              <path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></path>
              <path
                fillRule="evenodd"
                d="M24 26a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"
                clipRule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
      </Link>
    </div>
  );
}

export {Navbar};
