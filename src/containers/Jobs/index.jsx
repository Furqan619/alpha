
import StyledJobs from "./StyledJobs";
import AppWrapperHOC from "../CommonHOC/AppWrapperHOC";

const Jobs = () => {
  return (
    <StyledJobs>
      <div className="jobs-container">
        <h2>Jobs</h2>
        <p>This is a simple jobs container.</p>
      </div>
    </StyledJobs>
  );
};

export default AppWrapperHOC(Jobs);