import React, { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <div class="button">
                <p>{this.props.text}</p>
            </div>
        )
    }
}