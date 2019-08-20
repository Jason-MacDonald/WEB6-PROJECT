import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './header';
import Nav from './nav';
import Main from './main';
import SearchForm from './search-form';

function Index() {
  //return <h2>Home</h2>;
  return (
    <div>
      <h2>Home</h2>
      <Header/>
      <Nav/>
      <Main/>
      <SearchForm/>
    </div>
    );
}

function Vehicles() {
  return <h2>Vehicles</h2>;
}

function Finance() {
  return <h2>Finance</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
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