import React from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainBody from "./components/layout";


export default function App() {
    return (
        <div className="App">
            <ToastContainer autoClose={3000} position="top-right"/>
            <MainBody/>
        </div>
    );
}
