import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../services/auth";
import PATH from "./Paths";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {

    if (!sessionStorage.getItem("activeSession")) {
      signOut(auth);
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to={PATH.LOGIN} replace />;
};

export default ProtectedRoute;