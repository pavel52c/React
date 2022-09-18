import React from "react";

class Input extends React.Component {
    render() {
        return (
            <li className="nav__item">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type="text" name={this.props.title} id={this.props.id}/>
            </li>
        );
    }
}

export default Input