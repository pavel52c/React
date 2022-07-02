import "./Form.scss"
import {Input} from "../Input/Input";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {TextAreaInput} from "../TextAreaInput/TextAreaInput";
import {filterData} from "./filterData";
import { Key } from "react";
import inputInterface from "../Input/inputInterface";

interface IFormInputs {
    firstName: string;
    lastName: string;
    age: number;
    website: string;
}

export const Form = (props: any): JSX.Element => {

    const {  disabled } = props;
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data: IFormInputs | any) => {
        navigate("/allUsers")
    };

    const textAreaProps = {
        label: "Comment",
        placeHolder: "",
        registerName: "comment",
        name: "comment",
        register,
        disabled,
    }

    const data: any = JSON.parse(localStorage.getItem(localStorage.key(0) || "") || JSON.stringify({}))
    const rightData = filterData(data);

    const inputProps = {
        register,
        disabled,
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul className="Form__list">
                {rightData.map(
                    (el: JSX.IntrinsicAttributes & inputInterface, index: Key | null | undefined) => <li><Input {...el} key={index} {...inputProps}/></li>
                )}
                <li><TextAreaInput {...textAreaProps} key={123456}/></li>
            </ul>
            <input type="submit" onSubmit={onSubmit} className={`Form__submit-btn ${!disabled ? "Form__submit-btn__active" : ""}`}/>
        </form>
    )
}