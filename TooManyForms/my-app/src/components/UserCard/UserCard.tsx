import "./UserCard.scss"
import userInterface from "../../models/userInterface";
import {Link} from "react-router-dom";
import React from "react";

export const UserCard = (props: userInterface) => {
    const {name, address, company, id} = props

    const onClick = () => {
        localStorage.clear();
        localStorage.setItem(String(id), JSON.stringify(props));
    };

    return (
        <div className="div">
            <ul>
                <li><span>ФИО:</span>{name}</li>
                <li><span>город:</span>{address.city}</li>
                <li><span>компания:</span>{company.name}</li>
            </ul>
            <Link to="/profileUser" className="linkMore" onClick={onClick}>Подробнее</Link>
        </div>
    )
}