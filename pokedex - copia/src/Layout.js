import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import MenuTop from "./components/MenuTop";

const Layout = (props) => {
    return (
        <div>
            <MenuTop />
            <Outlet />
            <Menu setBusca={props.setBusca} busca={props.busca} />
        </div>
    );
};

export default Layout