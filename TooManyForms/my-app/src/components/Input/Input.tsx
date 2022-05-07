import inputInterface from "./inputInterface";


export const Input = (props:inputInterface) => {
    const {placeHolder, label, register, registerName } = props;

    return (
        <>
            <label>{label}</label>
            <input placeholder={placeHolder} {...register(registerName)}/>
        </>
    )
}