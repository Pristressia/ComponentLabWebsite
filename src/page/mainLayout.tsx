// import React from "react";
import { Outlet } from "react-router-dom";

export default function mainLayout() {

    return (
        <div className="siteWrapper">

            <Outlet />
        </div>
    )
}