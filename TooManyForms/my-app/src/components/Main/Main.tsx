import "./Main.scss"
import mainInterface from "./mainInterface";
import {Routers} from "../Routers/Routers";
import React from "react";

export const Main = (props: mainInterface): JSX.Element => {
    const {filter} = props;
    const routersProps = {
        filter,
    }

    return (
        <main className="main">
            <Routers {...routersProps}/>
        </main>
    )
}