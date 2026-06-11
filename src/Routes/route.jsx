
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Routers from "./constant";
import GlobalStyles from "./GlobalStyles";
import "antd/dist/reset.css";


function Routing() {
  return (
  <>
   <GlobalStyles />
   <BrowserRouter>
    <Routes>
      {Routers.map((route) => {
        const Component = route.component;
        return (
        <Route
          key={route.path}
          path={route.path}
          element={<Component />} />
        );
      })}
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default Routing;
