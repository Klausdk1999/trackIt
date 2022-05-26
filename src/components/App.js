import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Header from "./Header";
import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits"
import Today from "./Today";
import History from "./History";

export default function App(){
    return(
        <BrowserRouter>
            {/* <Header/> */}
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/cadastro" element={<SignUp/>} />
                {/* <Route path="/habitos" element={<Habits/>} />
                <Route path="/hoje" element={<Today/>} />
                <Route path="/historico" element={<History/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}

