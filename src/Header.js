import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import "./style.scss";

export default class Header extends Component {
    state = {};

    render() {
        return (
            <div className="headerBody">
                <h1 className="title">RocketBook</h1>
            </div>
        );
    }
}
