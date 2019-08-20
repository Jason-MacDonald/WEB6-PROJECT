import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './header';
import Nav from './nav';
import Main from './main';
import MainContent from './main-content';
import VehicleContent from './vehicle-content';
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
      <MainContent/>
      <Footer/>
    </div>
    );
}

function Vehicles() {
  return (
    <div>
      <h2>Vehicles</h2>
      <Header/>
      <Nav/>
      <VehicleContent/>
      <Footer/>
    </div>);
}

function Finance() {
  return (
    <div>
      <h2>Finance</h2>
      <Header/>
      <Nav/>
      <Footer/>
    </div>);
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <Header/>
      <Nav/>
      <Footer/>
    </div>);
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
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