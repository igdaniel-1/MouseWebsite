import React from "react";
// import LazyLoadWrapper from "components/wrapper/lazy-load-wrapper";
import ROUTE_PATHS from "./routePaths";
// import { route } from "types/routes";

export interface route {
    path: string;
    component: React.ReactElement;
    exact: boolean;
}

const App = React.lazy(()=>import("../App")) ;

const routes: route[] = [
    {
        path: ROUTE_PATHS.HOME,
        component: <App />, ///should I be calling Home or App within the component <> brackets
        exact: false,
    }
    // ,
    // {
    //     path: ROUTE_PATHS.THANKYOU,
    //     component: <LazyLoadWrapper><ThankYou /></LazyLoadWrapper>,
    //     exact: true,
    // }  
]

export default routes;