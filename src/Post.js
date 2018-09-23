import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import "./style.scss";
import PostHeader from "./PostHeader";

let postHeader = [
    {
        img:
            "http://www.itegra.com.br/wp-content/uploads/2017/08/Elizianne-Pessoa.jpg",
        name: "Elizianne Maria",
        time: "há 10 min"
    }
];

export default class Post extends Component {
    state = {};

    render() {
        return (
            <div className="post">
                <PostHeader postHeader={postHeader} />
                <div className="linePost" />
                <p className="textPost">
                    Conteudo do Post Conteudo do Post Conteudo do Post Conteudo
                    do Post Conteudo do Post Conteudo do Post Conteudo do Post
                    Conteudo do Post Conteudo do Post Conteudo do Post Conteudo
                    do Post Conteudo do Post Conteudo do Post Conteudo do Post
                    Conteudo do Post Conteudo do Post Conteudo do Post Conteudo
                    do Post Conteudo do Post Conteudo do Post Conteudo do Post
                    Conteudo do Post Conteudo do Post Conteudo do Post Conteudo
                    do Post Conteudo do Post Conteudo do Post Conteudo do Post
                    Conteudo do Post Conteudo do Post Conteudo do Post Conteudo
                    do Post Conteudo do Post Conteudo do Post Conteudo do Post
                    Conteudo do Post Conteudo do Post Conteudo do Post Conteudo
                    do Post Conteudo do Post Conteudo do Post Conteudo do Post
                    Conteudo do Post Conteudo do Post Conteudo do Post Conteudo
                    do Post Conteudo do Post Conteudo do Post Conteudo do Post
                    Conteudo do Post Conteudo do Post Conteudo do Post Conteudo
                    do Post Conteudo do Post Conteudo do Post Conteudo do Post
                    Conteudo do Post Conteudo do Post Conteudo do Post Conteudo
                    do Post
                </p>
            </div>
        );
    }
}
