import React from 'react'
import  './Header.sass'
import Navigation from "../Navigation/Navigation";

export default function Header():JSX.Element{
    return (
        <header className="header">
            <h1 className="header__title">Тестовое задание</h1>
            <Navigation/>
        </header>
    );
}
