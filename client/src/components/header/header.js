import React from 'react';

import './header.css'

// Could be a function as only returns presentational data. Stateless.
class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    render () {
        return (
            <div className="header-main-div">
                <p>The Car Company | enquiry@thecarcompany.co.nz</p>
            </div>
        )
    }
}

export default Header;
