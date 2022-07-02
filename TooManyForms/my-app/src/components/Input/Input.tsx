import inputInterface from "./inputInterface";
import "./Input.scss"

export const Input = (props: inputInterface): JSX.Element => {
    const {value, placeHolder, label, register, registerName, disabled} = props;

    return (
        <div className="Input">
            <label className="Input__label">{label}</label>
            <input placeholder={placeHolder} {...register(registerName)} disabled={disabled} value={value} className="Input__input"/>
        </div>
    )
}