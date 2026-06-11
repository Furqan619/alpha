import StyledAboutUs from "./StyledAboutUs";
import AppWrapperHOC from "../CommonHOC/AppWrapperHOC";

const AboutUs = () => {
  return (
    <>
      <StyledAboutUs>
        <h1 className="heading-about">AboutUs</h1>
      </StyledAboutUs>
    </>
  )
}

export default AppWrapperHOC(AboutUs);