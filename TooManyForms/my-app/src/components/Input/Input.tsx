import inputInterface from "../../models/inputInterface";
import "./Input.scss"
import {useState} from "react";

export const Input = (props: inputInterface): JSX.Element => {
    const {value, placeHolder, label, register, name, disabled, errors = {}} = props;
    const [inputValue, setInputValue] = useState(value)
    console.log("inputValue", inputValue)
    return (
        <div className="Input">
            <label className="Input__label">{label}</label>
            <input
                type="text"
                placeholder={placeHolder}
                {...register(name)}
                disabled={disabled}
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                className={`Input__input ${errors.name ? 'is-invalid' : ''}`}
            />
            {errors?.name && <p>Поле обязательно для заполнения</p>}
        </div>
    )
}