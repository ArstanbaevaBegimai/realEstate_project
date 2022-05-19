import React, { createContext, useContext, useState } from 'react'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthContextProvider({children, value}) {

  let user = value;
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const userRegister = (email, password) => {
    const data = createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("user is registered");
      navigate("/houses")
      return "Success"
    })
    .catch((error) => {
      setErrorMessage(error.message);
      setAuthError(true);
      return error.message;
    })
    return data;
  }

  const userSignIn = (email, password) => {
    const data = signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("user signed in")
      navigate("/houses")
    })
    .catch((error) => {
      setErrorMessage(error.message);
      setAuthError(true);
      return error.message;
    }
    )
    return data;
  }

  const userSignOut = () => {
    signOut(auth);
    navigate("/houses");
}

  return (
    <AuthContext.Provider value={{
                            value: value, 
                            userRegister,
                            userSignIn,
                            userSignOut, 
                            authError: authError,
                            errorMessage: errorMessage,
                            setAuthError
                          }}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthValue = () => {
  return useContext(AuthContext);
}