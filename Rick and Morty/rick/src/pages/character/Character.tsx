import React from "react";
import store from "../../store/store";


interface ICard {
    image: string,
    name: string,
    url: string,
}

export default function Character():JSX.Element {
    //@ts-ignore
    const card:ICard = store.getState().history.value[store.getState().history.value.length - 1];
    return(
        <div className="character">
            <img src={card.image || "https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson"} alt={card.name}/>
            <h1>{card.name}</h1>
            <a href={card.url} target="_blank" rel="noreferrer">{card.url}</a>
        </div>
    )
}