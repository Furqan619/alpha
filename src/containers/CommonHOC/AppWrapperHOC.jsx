import { Flex } from "antd";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CommonHeader from "../../components/CommonHeader";
import CommonFooter from "../../components/CommonFooter";
import SideNavigation from "../../components/SideNavigation";


function AppWrapperHOC(WrapperComponent) {
  return (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setIsLoggedIn(!!user);
          setIsLoading(false);
        });
    
        return unsubscribe;
      }, [auth]);

    
    return (
      <>
        {isLoading ? null :
          isLoggedIn ?
          <Flex>
            <SideNavigation />
            <WrapperComponent {...props} />
          </Flex>
          :
          <>
            <CommonHeader />
            <WrapperComponent {...props} />
            <CommonFooter />
          </>
        }
      </>
    )
  }
}

export default AppWrapperHOC;