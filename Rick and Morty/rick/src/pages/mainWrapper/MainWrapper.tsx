import React, {useState} from "react";
import Form from "../../components/Form/Form";
import CardList from "../../components/CardList/CardList"

export default function MainWrapper() {
    const [MainState, setMainState] = useState<Array<object>>([]);

    if (MainState.length === 0) {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(result => setMainState(result.results))
    }


    const handleChange:any = (results:Array<object>) => {
        setMainState(results)
    }
    return (
        <>
            <Form onSubmit={handleChange}/>
            <div className="mainWrapper">
                <CardList cards={MainState}/>
            </div>
        </>
    );
}

