import React from "react";
import NewItem from "./NewItem";

class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">
                <form action="https://jsonplaceholder.typicode.com/posts" method="post">
                    <NewItem/>
                </form>
            </nav>
        )
    }
}

export default Nav