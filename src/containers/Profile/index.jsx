import { useEffect, useState } from "react";
import AppWrapperHOC from "../CommonHOC/AppWrapperHOC";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import db from "../../services/firestore";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>

      {userData && (
        <>
          <p>Hi {userData.username}!</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </>
      )}
    </div>
  );
}

export default AppWrapperHOC(Profile);