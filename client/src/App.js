import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './header';
import Nav from './nav';
import Main from './main';
import SearchForm from './search-form';
import Footer from './footer';

function Index() {
  //return <h2>Home</h2>;
  return (
    <div>
      <h2>Home</h2>
      <Header/>
      <Nav/>
      <Main/>
      <SearchForm/>
      <Footer/>
    </div>
    );
}

function Vehicles() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Footer/>
    </div>);
}

function Finance() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Footer/>
    </div>);
}

function About() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Footer/>
    </div>);
}

function Contact() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Footer/>
    </div>);
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vehicles/">Vehicles</Link>
            </li>
            <li>
              <Link to="/finance/">Finance</Link>
            </li>
            <li>
            <Link to="/about/">About</Link>
            </li>
            <li>
            <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/vehicles/" component={Vehicles} />
        <Route path="/finance/" component={Finance} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
}

export default AppRouter;