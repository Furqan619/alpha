import Home from "../containers/Home";
import AboutUs from "../containers/AboutUs";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";

const Routers = Object.freeze([
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about-us",
    component: AboutUs,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/sign-up",
    component: SignUp,
  }
]);

export default Routers;