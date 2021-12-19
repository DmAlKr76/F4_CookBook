import React, { Component } from "react";
import Header from "./Header.js"
import "../styles/Main.css";


class Main extends Component {
    render() {
        return (
            <main>
                <Header />
                <Main content = "Книга кулинарных рецептов" />
                <Categories />
            </main>
        );
    }
}

export default Home;
