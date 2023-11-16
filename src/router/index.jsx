

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import Deal from "../pages/Deal";
import Rule from "../pages/Rule";
import PatternPrint from "../pages/PatternPrint";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/women",
                element: <Women/>
            },
            {
                path: "/kids",
                element: <Kids/>
            },
            {
                path: "/deal",
                element: <Deal/>
            },
            {
                path: "/rule",
                element: <Rule/>
            },
            {
                path: "/pattern-print",
                element: <PatternPrint/>
            }
        ]
    }
]);

export default router;