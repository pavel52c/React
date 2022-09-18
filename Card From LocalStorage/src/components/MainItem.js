import React from "react";

class MainItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        localStorage.removeItem(this.props.title)
        this.props.updateData();
    }

    render() {
        return(
            <li className="main__item">
                <h3 className="main__title">
                    {this.props.title}
                    <span className="main__item-close" onClick={this.onClick}/>
                </h3>
                <p className="main__description">{this.props.description}</p>
                <p className="main__item-bottom">{this.props.created}</p>
            </li>
        )
    }
}

export default MainItem