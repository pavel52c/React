import "./AllUsers.scss"
import allUsersInterface from "./allUsersInterface";
import {useState} from "react";
import {getData} from "../../getData";
import userInterface from "./userInterface";
import {UserCard} from "../UserCard/UserCard";

export const AllUsers = (props: allUsersInterface): JSX.Element => {

    const [state, setState] = useState<Array<userInterface>>([]);
    getData(setState)

    return (
        <>
            <h1>Список пользователей</h1>
            <ul>
                {state.map((element: userInterface) => <li key={element.id} className="UserCard">
                    <UserCard {...element}/></li>)}
            </ul>
            <p className="description">Найдено {state.length} пользователей</p>
        </>
    )
}