import React from "react";
import Layout from "./Layout";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";

const routes = (busca, setBusca) => [
    {
        path: "/",
        element: <Layout busca={busca} setBusca={setBusca} />,
        children: [
            { path: "/", element: <Home busca={busca} /> },
            { path: "/pokemon/:id", element: <Pokemon /> }
        ]
    }
]

export default routes;