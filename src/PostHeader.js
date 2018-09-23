import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import "./style.scss";
import PropTypes from "prop-types";

export default class PostHeader extends Component {
    static propTypes = {
        postHeader: PropTypes.object.isRequired
    };

    state = {};

    render() {
        return (
            <div>
                <table>
                    <td>
                        <th>
                            <img
                                className="avatar"
                                src={this.props.postHeader[0].img}
                            />
                        </th>
                        <td>
                            <th>
                                <h3 className="textUser">
                                    {this.props.postHeader[0].name}
                                </h3>
                                <h5 className="textHora">
                                    {this.props.postHeader[0].time}
                                </h5>
                            </th>
                        </td>
                    </td>
                </table>
            </div>
        );
    }
}
