import "./UserProfile.scss"
import {Form} from "../Form/Form";
import {Button} from "../Button/Button";
import {useState} from "react";

export const UserProfile = () => {

    const [disabledState, setDisabledState] = useState(true);

    const buttonProps = {
        className: "blueButton user-profile__btn",
        text: "Редактировать",
        onClick: () => setDisabledState(!disabledState),
    }

    const formProps = {
        disabled: disabledState,
    }

    return (
        <div className="user-profile">
            <div className="user-profile__header">
                <h1 className="user-profile__title">Профиль пользоваетля</h1>
                <Button {...buttonProps}/>
            </div>
            <Form {...formProps}/>
        </div>
    )
}