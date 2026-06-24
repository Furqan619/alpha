import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../services/auth";
import PATH from "../../Routes/Paths";
import StyledJobs from "./StyledJobs";
import AppWrapperHOC from "../CommonHOC/AppWrapperHOC";

const Jobs = () => {

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log("Auth State Changed");
    console.log(user);
  });

  return unsubscribe;
}, []);

  return (
    <div>
      <h1>Jobs</h1>
      <p>This is the profile page.</p>
    </div>
  );
};

export default AppWrapperHOC(Jobs);