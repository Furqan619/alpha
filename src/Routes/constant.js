import PATH from "./Paths";
import Home from "../containers/Home";
import AboutUs from "../containers/AboutUs";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import ContactUs from "../containers/ContactUs";

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
  }
  
]);

export default Routers;