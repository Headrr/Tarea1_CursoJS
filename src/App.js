import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/homepage/homepage.components";
import Recetas from './pages/recetas/recetas.components';

import Header from "./components/header/header.components";
import Footer from "./components/footer/footer.components";

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recetas" component={Recetas} />
          </Switch>
        <Footer></Footer>
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;