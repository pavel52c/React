import "./Button.scss"
import ButtonInterface from "./buttonInterface";

export const Button = (props:ButtonInterface):JSX.Element => {
    const { className, text } = props;

    return (
       <button className={className}>{text}</button>
    )
}