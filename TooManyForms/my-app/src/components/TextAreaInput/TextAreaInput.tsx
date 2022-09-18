import "./TextAreaInput.scss"
import  "../Input/Input.scss"
import inputInterface from "../../models/inputInterface";

export const TextAreaInput = (props:inputInterface) => {
    const { placeHolder, label, register, registerName, disabled } = props;

    return (
        <div className="Input">
            <label className="Input__label">{label}</label>
            <input placeholder={placeHolder} {...register(registerName)} disabled={disabled ? "disabled": ""} className="Input__text-area"/>
        </div>
    )
}