import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

const defaultValue = [];

const AuthContext = createContext(defaultValue);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location=useLocation();
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    if (userDetails.email && userDetails.password) {
      createUserWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          let from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });
        })
        .catch((err) => {
          console.log("error in signUp handler", err);
        });
    }
    setUserDetails({
      email: "",
      password: "",
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
      .then((userCredential) => {
        const user = userCredential.user;
        let from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log("errro in login Handler", err);
      });
    setUserDetails({
      email: "",
      password: "",
    });
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("logged out succesfully");
        let from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((err) => console.log("error in signout", err));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        setToken(user.accessToken);
      } else {
        setToken(null);
      }
    });
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          token,
          userDetails,
          changeHandler,
          signUpHandler,
          loginHandler,
          signOutHandler,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };