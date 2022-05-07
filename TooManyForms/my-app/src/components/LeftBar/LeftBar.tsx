import "./LeftBar.scss"
import {Button} from "../Button/Button";

export const LeftBar = ():JSX.Element => {
    return (
        <div className="bar">
            <div className="bar__wrapper">
                <p className="bar__sort">Сортировка</p>
                <Button className={"blueButton"} text={"по городу"}/>
                <Button className={"blueButton"} text={"по компании"}/>
            </div>
        </div>
    )
}