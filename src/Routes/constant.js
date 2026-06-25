import PATH from "./Paths";
import Home from "../containers/Home";
import AboutUs from "../containers/AboutUs";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import ContactUs from "../containers/ContactUs";
import Jobs from "../containers/Jobs";
import Profile from "../containers/Profile";
import ForgotPassword from "../containers/Login/ForgotPassword";

const Routers = Object.freeze([
  {
    path: PATH.HOME,
    component: Home,
  },
  {
    path: PATH.ABOUT,
    component: AboutUs,
  },
  {
    path: PATH.LOGIN,
    component: Login,
  },
  {
    path: PATH.SIGNUP,
    component: SignUp,
  },
  {
    path: PATH.CONTACT,
    component: ContactUs,
  },
  {
    path: PATH.FORGOT_PASSWORD,
    component: ForgotPassword,
  },
  {
    path: PATH.JOBS,
    component: Jobs,
    isPrivate: true,
  },
  {
    path: PATH.PROFILE,
    component: Profile,
    isPrivate: true,
  }

]);

export default Routers;