import React from "react";
import "./Form.sass"
import { useForm } from "react-hook-form";

interface IProps {
    onSubmit(res: Array<object>): Function,
}

interface Item {
    name: string;
}


function Form(props: IProps):JSX.Element {

    const onSubmit = (data:any, e:any) => {
        let notEmptyRes:object = {};
        e.preventDefault();

        const value:string = data.search;
        if (!value) {
            return;
        }

        fetch("https://rickandmortyapi.com/api")
            .then(response => response.json())
            .then(async result => {
                let results:Array<object> = []

                for (const key of Object.keys(result)) {
                    await fetch(result[key])
                        .then(data => data.json())
                        .then(result => {
                            results = [...results, ...result.results.filter((item:Item) => item.name.toLowerCase().includes(value.toLowerCase()))]
                        })
                }

                if (results.length === 0) {
                    results = [notEmptyRes];
                }
                props.onSubmit(results);
            })
    };

    const { register, handleSubmit } = useForm();

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input {...register("search")} type="text" className="form__input" placeholder="Поиск..."/>
                <input type="submit"/>
            </form>
        </>
    );
}

export default Form