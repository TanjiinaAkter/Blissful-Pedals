import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import appContext from "../context/context";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const { setAlertMessage } = useContext(appContext);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signupUsingEmailAndPassword = (
    name,
    email,
    password,
    history,
    location
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setUser(user);
            localStorage.setItem("user-auth-token", user.accessToken);
            if (location) {
              history.push(location?.state?.from?.pathname || "/user/profile");
            }
            setAlertMessage("success", "Successfully completed registration!");
          })
          .catch((error) => {
            setAlertMessage("error", error.message);
          });
      })
      .catch((error) => {
        setAlertMessage("error", error.message);
      });
  };
  const loginUsingEmailAndPassword = (email, password, history, location) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        localStorage.setItem("user-auth-token", user.accessToken);
        if (location) {
          history.push(location?.state?.from?.pathname || "/user/profile");
        }
        setAlertMessage("success", "Login success!");
        // ...
      })
      .catch((error) => {
        setAlertMessage("error", error.message);
      });
  };
  const signInUsingGoogle = (history, location) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem("user-auth-token", user.accessToken);
        if (location) {
          history.push(location?.state?.from?.pathname || "/user/profile");
        }
        setAlertMessage("success", "Login success!");
      })
      .catch((error) => {
        setAlertMessage("error", error.message);
      });
  };

  const logout = (history) => {
    signOut(auth).then(() => {
      setUser({});
      localStorage.removeItem("user-auth-token");
      history.push("/user/login");
      setAlertMessage("info", "Logout success!");
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
      }
    });
  }, []);

  return {
    user,
    signInUsingGoogle,
    signupUsingEmailAndPassword,
    loginUsingEmailAndPassword,
    logout,
  };
};

export default useFirebase;
