import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import PATH from "./Paths";

const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  return user ? children : <Navigate to={PATH.LOGIN} replace />;
};

export default ProtectedRoute;