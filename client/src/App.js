import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/header/header';
import Main from './components/main/main';
import MainContent from './components/main-content/main-content';
import VehicleContent from './components/vehicle-content/vehicle-content';
import SearchForm from './components/search-form/search-form';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import LoginForm from "./components/login-form/login-form";
import FinanceContent from './components/finance-content/finance-content'

//import './nav.css';

function Index() {
  return (
    <div>
      <h2>Home</h2>
      <LoginForm />
      <Header />
      <Nav />
      <Main />
      <SearchForm />
      <MainContent />
      <Footer />
    </div>
  );
}

function Vehicles() {
  return (
    <div>
      <h2>Vehicles</h2>
      <Header />
      <Nav />
      <VehicleContent />
      <Footer />
    </div>);
}

function Finance() {
  return (
    <div>
      <h2>Finance</h2>
      <Header />
      <Nav />
      <FinanceContent />
      <Footer />
    </div>);
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <Header />
      <Nav />
      <Footer />
    </div>);
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <Header />
      <Nav />
      <Footer />
    </div>);
}

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/vehicles/" component={Vehicles} />
        <Route path="/finance/" component={Finance} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
}

export default App;