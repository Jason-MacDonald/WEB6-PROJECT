// First look at styled components. 
// Rather fancy but need figure out how it is working.

import React, { Component } from 'react'
import Navbar from './navbar';

import GlobalStyle from './global';

class StyledNav extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
      </>
    )
  }
}

export default StyledNav;