import React from "react";
import "./CardList.sass"
import Line from "../Line/Line";
import NullCard from "../NullCard/NullCard"

interface Props {
    cards: Array<Item>,
}

interface Item {
    name?: string,
    url?: string,
    image?: string,
}


function CardList(props:Props):JSX.Element {
    if (props?.cards[0]?.name)
        return (
            <ul>
                {props.cards.map((item:Item, index:number) => <Line name={item.name} key={index} image={item.image} url={item.url}/>)}
            </ul>
        );
    else
        return (
            <NullCard/>
        )
}

export default CardList