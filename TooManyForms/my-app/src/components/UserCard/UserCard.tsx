import "./UserCard.scss"
import userInterface from "../AllUsers/userInterface";
import {Link} from "react-router-dom";

export const UserCard = (props: userInterface) => {
    const {name, address, company} = props

    return (
        <div className="div">
            <ul>
                <li><span>ФИО:</span>{name}</li>
                <li><span>город:</span>{address.city}</li>
                <li><span>компания:</span>{company.name}</li>
            </ul>
            <Link to="/profileUser" className="linkMore">Подробнее</Link>
        </div>
    )
}