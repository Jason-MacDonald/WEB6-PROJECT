import React from 'react';
import Vehicle from './vehicle';

import './main-content.css';

class MainContent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    render () {
        return (
            <div className="main-content-main-div">
               <Vehicle/> 
               <Vehicle/> 
               <Vehicle/> 
               <Vehicle/> 
               <Vehicle/> 
               <Vehicle/> 
               <Vehicle/> 
               <Vehicle/> 
            </div>
        )
    }
}

export default MainContent;
