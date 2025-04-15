import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CustomRoutes                   from './customRoutes';
import { createBrowserHistory }       from 'history';
import { useEffect } from "react";
import routes from "./routeComponents";
import Home from "../components/Home";
// import HandleHomePageInput from "../components/handleHomePageInput";

const history = createBrowserHistory ();

const Routing = () => { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter >
      {/* <CustomRoutes/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* SWITCH HAS BEEN REPLACED IN THE LATEST REACT-ROUTER V, USE ROUTES */}
        {/* https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom */}
        {/* https://stackoverflow.com/questions/56764690/what-is-the-difference-between-browserrouter-and-router-in-react-router */}
        {/* {routes.map(({ path, exact, ...rest }) => {
          return (
            <Route
              path={path}
              // key={path}
              // exact={exact}
              render={() => {
                return (
                  <>
                    {rest.component}
                    {path === "/" ? <HandleHomePageInput /> : null}
                  </>
                );
              }}
            />
          );
        })} */}
      </Routes>
    </BrowserRouter>
  );
}

export { Routing, history }