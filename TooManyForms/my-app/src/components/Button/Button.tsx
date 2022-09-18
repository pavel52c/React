import "./Button.scss"
import ButtonInterface from "../../models/buttonInterface";

export const Button = (props:ButtonInterface):JSX.Element => {
    const { className, text, onClick } = props;

    return (
       <button className={className} onClick={onClick}>{text}</button>
    )
}