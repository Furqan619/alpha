import CommonHeader from "../../components/CommonHeader";
import CommonFooter from "../../components/CommonFooter";


function AppWrapperHOC(WrapperComponent) {
  return (props) => {
    return (
      <>
        <CommonHeader />
        <WrapperComponent {...props} />
        <CommonFooter />
      </>
    )
  }
}

export default AppWrapperHOC;