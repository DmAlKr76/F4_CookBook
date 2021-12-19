import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import Categories from "./Categories.js";
import Recipes from "./Recipes.js";
import Recipe from "./Recipe.js";


function App () {

    return (
        <div className="App">
            <Header />
            <nav>
                <Link to="/">Main</Link>
                <Link to="/category">Categories</Link>
            </nav>
                <Switch>
                    <Route path='/' exact={true}><Main/></Route>
                    <Route path='/category' exact={true}><Categories /></Route>
                    <Route path='/category/:catId/recipes/' exact={true}><Recipes /></Route>
                    <Route path='/category/:catId/recipe/:id' exact={true}><Recipe /></Route>
                    <Route path='/swagger' exact={true}><Swagger /></Route>
                    <Route><HomePage/></Route>
                </Switch>
        </div>
    );
}

export default App;

