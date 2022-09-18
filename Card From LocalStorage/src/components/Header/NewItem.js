import React from "react";
import Input from "./Input";


class NewItem extends React.Component {
    render() {
        return (
            <ul className="nav__inputs">
                <Input
                    id={"Title"}
                    label={"Заголовок карточки"}
                    title={"Title"}
                />
                <Input
                    id={"Description"}
                    label={"Описание"}
                    title={"description"}
                />
                <Input
                    id={"Date"}
                    label={"Дата создания"}
                    title={"date"}
                />
            </ul>
        )
    }
}

export default NewItem