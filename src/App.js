import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/home";
import Gallery from "./components/pages/gallery";
import Contact from "./components/pages/contact";
import Blog from "./components/pages/blog";

function App() {
  return (
    <div>
      <div className="menu">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
