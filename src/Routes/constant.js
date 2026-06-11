import Home from "../containers/Home";
import AboutUs from "../containers/AboutUs";

const Routers = Object.freeze([
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about-us",
    component: AboutUs,
  }
]);

export default Routers;