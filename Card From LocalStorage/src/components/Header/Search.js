import React from "react";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e)  {
        this.props.onChangeSearch(e.target.value)
    }


    render() {
        let search = this.props.value
        return (
            <div className="main__search">
                <input
                    type="text"
                    className="main__input"
                    placeholder="Ищем карточки..."
                    onChange={this.onChange}
                    value={search}
                />
            </div>
        )
    }
}

export default Search