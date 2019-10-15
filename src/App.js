import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './components/main/main';
import MainContent from './components/main-content/main-content';
import VehicleContent from './components/vehicle-content/vehicle-content';
//import SearchForm from './components/search-form/search-form';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import LoginForm from "./components/login-form/login-form";
import FinanceContent from './components/finance-content/finance-content'
import AboutContent from './components/about-content/about-content'
import ContactContent from './components/contact-content/contact-content'
import AddVehicleForm from "./components/admin-add-vehicle/admin-add-vehicle";

//import './nav.css';

function Index() {
  return (
    <div>
      {/* <LoginForm /> */}
      <Nav />
      <Main />
      {/* <SearchForm /> */}
      <MainContent />
      <Footer />
    </div>
  );
}

function Vehicles(props) {
  // https://www.developerdrive.com/turning-the-querystring-into-a-json-object-using-javascript/
  var pairs = props.location.search.slice(1).split('&');

  var result = {};

  pairs.forEach(function(pair) {
    pair = pair.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });

  var queryString = JSON.parse(JSON.stringify(result));
  console.log(queryString);

  return (
    <div>
      <Nav />
      <VehicleContent   
          make={queryString.make} 
          model={queryString.model} 
          body={queryString.body} 
          transmission={queryString.transmission} 
          minYear={queryString.minYear} 
          maxYear={queryString.maxYear}
          minPrice={queryString.minPrice} 
          maxPrice={queryString.maxPrice} 
          minKms={queryString.minKms} 
          maxKms={queryString.maxKms} />
      <Footer />
    </div>);
}



function Finance() {
  return (
    <div>
      <Nav />
      <FinanceContent />
      <Footer />
    </div>);
}

function About() {
  return (
    <div>
      <Nav />
      <AboutContent />
      <Footer />
    </div>);
}

function Contact() {
  return (
    <div>
      <Nav />
      <ContactContent />
      <Footer />
    </div>);
}

function Login() {
  return (
    <div>
      <Nav/>
      <LoginForm />
      <AddVehicleForm />
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
        <Route path="/login/" component={Login} />
      </div>
    </Router>
  );
}

export default App;