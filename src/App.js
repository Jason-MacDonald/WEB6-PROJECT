import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


// Import the range of components required for all web pages.
import Main from './components/main/main';
import MainContent from './components/main-content/main-content';
import VehicleContent from './components/vehicle-content/vehicle-content';
import ReduxVehicleContent from './components/vehicle-content/redux-vehicle-content'
//import SearchForm from './components/search-form/search-form';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import LoginForm from "./components/login-form/login-form";
import FinanceContent from './components/finance-content/finance-content'
import AboutContent from './components/about-content/about-content'
import ContactContent from './components/contact-content/contact-content'
import AddVehicleForm from "./components/admin-add-vehicle/admin-add-vehicle";
import DeleteVehicleForm from "./components/admin-delete-vehicle/admin-delete-vehicle";

import VehicleList from './components/test-component/test-component'
import TestForm from './components/test-form/test-form'
import ReduxVehicles from "./components/redux-vehicles/redux-vehicles";

import Navbar from './components/styled-nav/styled-nav'

//import './nav.css';

// Serves up the Index page by returning a list of appropriate components.
// Searchfrom has been integrated into the main component directly.
function Index() {
  return (
    <div>
    <Navbar />
      {/* <LoginForm /> */}
      {/* <Nav /> */}
      <Main />
      {/* <SearchForm /> */}
      {/* <MainContent /> */}
      <ReduxVehicles />
      <Footer />
    </div>
  );
}

function Vehicles(props) {

  // The following section takes the query string from the form submission and converts it into JSON.
  // TODO: Move to middleware. Better way to achieve?
  // https://www.developerdrive.com/turning-the-querystring-into-a-json-object-using-javascript/

  // Takes the search query, removes the leading ? and splits each pair into an array.
  var pairs = props.location.search.slice(1).split('&');
  var result = {};
  // Splits the pairs and assigns value to the appropriate index.
  pairs.forEach(function(pair) {
    pair = pair.split('=');
    // TODO: research how this line works.
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });
  // Turns the result into JSON for use of pair values.
  var queryString = JSON.parse(JSON.stringify(result));
  //console.log(queryString);

  // UGLY: If the query strings chosen parameter is undefined, change it to the appropriate 'Any+' value.
  // The 'Any+' value is used conditionally to NOT use the parameter during a filtered search.
  // TODO: a separate API call for when vehicle LINK is clicked rather than using the filtered request version.
  if(queryString.make === undefined) {queryString.make = 'Any+Make'}
  if(queryString.model === undefined) {queryString.model = 'Any+Model'}
  if(queryString.body === undefined) {queryString.body = 'Any+Body'}
  if(queryString.transmission === undefined) {queryString.transmission = 'Any+Transmission'}
  if(queryString.minYear === undefined) {queryString.minYear = 'Any+Year'}
  if(queryString.maxYear === undefined) {queryString.maxYear = 'Any+Year'}
  if(queryString.minPrice === undefined) {queryString.minPrice = 'Any+Price'}
  if(queryString.maxPrice === undefined) {queryString.maxPrice = 'Any+Price'}
  if(queryString.minKms === undefined) {queryString.minKms = 'Any+Kms'}
  if(queryString.maxKms === undefined) {queryString.maxKms = 'Any+Kms'}

  return (
    <div>
    <Navbar />
      {/* <Nav /> */}
      {/* <VehicleContent   
          make={queryString.make} 
          model={queryString.model} 
          body={queryString.body} 
          transmission={queryString.transmission} 
          minYear={queryString.minYear} 
          maxYear={queryString.maxYear}
          minPrice={queryString.minPrice} 
          maxPrice={queryString.maxPrice} 
          minKms={queryString.minKms} 
          maxKms={queryString.maxKms} /> */}
      <ReduxVehicleContent />
      <Footer />
    </div>);
}


// Serves up the Finance page by returning a list of appropriate components. Mostly static content.
function Finance() {
  return (
    <div>
    <Navbar />
      {/* <Nav /> */}
      <FinanceContent />
      <Footer />
    </div>);
}

// Serves up the About page by returning a list of appropriate components. Mostly static content.
function About() {
  return (
    <div>
    <Navbar />
      {/* <Nav /> */}
      <AboutContent />
      <Footer />
    </div>);
}

// Serves up the Contact page by returning a list of appropriate components.
function Contact() {
  return (
    <div>
    <Navbar />
      {/* <Nav /> */}
      <ContactContent />
      <Footer />
    </div>);
}

// Serves up the Login page by returning a list of appropriate components.
// Currently a work in progress. AddVehicleForm and DeleteVehicleForm should be rendered appropriately after login in. ie via button / menu.
function Login() {
  return (
    <div>
      
      <br/>
      <TestForm />
      <VehicleList />

      {/* <Nav/> */}
      <Navbar />
      <LoginForm />
      <AddVehicleForm />
      <DeleteVehicleForm />
    </div>);
}

// Returns the appropriate page based on the path using React Router.
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