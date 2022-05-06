import * as React from 'react';
import MainWrapper from "../../pages/mainWrapper/MainWrapper"
import History from "../../pages/history/History";
import Character from "../../pages/character/Character";
import { Routes, Route } from "react-router-dom";
import "./Main.sass"

export default function Main():JSX.Element {
    return (
        <main className="main">
            <Routes>
                <Route path="main" element={<MainWrapper/>}/>
                <Route path="history" element={<History/>}/>
                <Route path="main/character" element={<Character/>}/>
                <Route path="history/character" element={<Character/>}/>
                <Route path="" element={<MainWrapper/>}/>
                <Route path="/character" element={<Character/>}/>
            </Routes>
        </main>
    );
}