import React from "react";
import Nav from "./Nav";


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__title">Тестовое задание</h1>
                <Nav/>
            </header>
        )
    }
}

export default Header