import Home from "../containers/Home";
import AboutUs from "../containers/AboutUs";
import Login from "../containers/Login";

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
  }
]);

export default Routers;