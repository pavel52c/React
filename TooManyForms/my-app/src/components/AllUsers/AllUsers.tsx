import "./AllUsers.scss"
import allUsersInterface from "./allUsersInterface";
import {useState} from "react";
import {getData} from "../../getData";
import userInterface from "./userInterface";
import {UserCard} from "../UserCard/UserCard";

export const AllUsers = (props: allUsersInterface): JSX.Element => {

    const [state, setState] = useState<Array<userInterface>>([]);
    if (state.length === 0)
        getData(setState);

    return (
        <>
            <h1 className="All-users__title">Список пользователей</h1>
            <ul>
                {state.map((element: userInterface) => <li key={element.id} className="UserCard">
                    <UserCard {...element}/></li>)}
            </ul>
            <p className="All-users__description">Найдено {state.length} пользователей</p>
        </>
    )
}