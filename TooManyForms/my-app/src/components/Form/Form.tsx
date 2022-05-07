import "./Form.scss"
import {Input} from "../Input/Input";
import {useForm} from "react-hook-form";
import {initialForm} from "./initialForm";

interface IFormInputs {
    firstName: string;
    lastName: string;
    age: number;
    website: string;
}

export const Form = (props: any):JSX.Element => {

    const {register, handleSubmit } = useForm();

    const onSubmit = (data: IFormInputs|any) => {
        console.log(JSON.stringify(data));
    };

    const textAreaProps = {
        label: "Comment",
        placeHolder: "",
        registerName: "comment",
        name: "comment",
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                {initialForm.map(
                    (el, index) => <li><Input {...el} register={register} key={index}/></li>
                )}
                <li><Input {...textAreaProps} register={register} key={123456}/></li>
            </ul>
            <input type="submit"/>
        </form>
    )
}