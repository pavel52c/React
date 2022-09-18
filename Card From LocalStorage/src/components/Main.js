import React from "react";
import MainItem from "./MainItem";
import getData from "../dataStorage/DataFromStorage";
import {DataToStorage, Data} from "../dataStorage/DataToStorage"
import newCard from "./Header/newCard";
import Search from "./Header/Search";


if (localStorage.length === 0) {
    DataToStorage(Data)
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchValue: ""};
    }

    onClick = () => {
        newCard()
        this.updateData()
    }

    updateData = () => {
        this.forceUpdate()
    }

    onChangeSearch = (value) => {
        this.setState({searchValue: value})
    }

    filter = (item) => item.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
        || item.description.toLowerCase().includes(this.state.searchValue.toLowerCase())
        || item.created.toLowerCase().includes(this.state.searchValue.toLowerCase())

    getRightData = () => {
        return this.state.searchValue ? getData().filter(item => this.filter(item)) : getData();
    }


    render() {
        const search = this.state.searchValue;
        return (
            <main className="main">
                <button className="main__btn" onClick={this.onClick}>Создать карточку</button>
                <Search value={search} onChangeSearch={this.onChangeSearch}/>
                <ul className="main__list">
                    {this.getRightData().map(item =>
                        <MainItem
                            title={item.title}
                            description={item.description}
                            created={item.created}
                            key={item.title}
                            updateData={this.updateData}
                        />)}
                </ul>
            </main>
        )
    }
}

// localStorage.clear();

export default Main