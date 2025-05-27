import React from "react";
import Paths from "./paths";
import HomePage from "../home";
import {BrowserRouter, Route, Routes} from "react-router-dom";


export default function MainBody() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Paths.home} element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}