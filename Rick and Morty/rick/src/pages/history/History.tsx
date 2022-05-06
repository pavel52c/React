import React from "react";
import CardList from "../../components/CardList/CardList";
import NullCard from "../../components/NullCard/NullCard";
import store from "../../store/store";

export default function History():JSX.Element {
    //@ts-ignore
    if (store.getState().history.value.length)
        return (
            <div className="history">
                {/*//@ts-ignore*/}
                <CardList cards={store.getState().history.value.reverse()}/>
            </div>
        );
    else
        return (
            <div className="history">
                <NullCard/>
            </div>
        )
}

