import React from 'react';
import Vehicle from '../vehicle/vehicle';

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
               <div className='header'>
                   <h2>Featured Vehicles</h2>
               </div>
                <div className="featured-wrapper">
                {/* <Vehicle id={1}/> 
                    <Vehicle id={2}/> 
                    <Vehicle id={3}/> 
                    <Vehicle id={4}/> 
                    <Vehicle id={5}/> 
                    <Vehicle id={6}/> 
                    <Vehicle id={7}/> 
                    <Vehicle id={8}/> 
                    <Vehicle id={9}/> 
                    <Vehicle id={10}/> 
                    <Vehicle id={11}/> 
                    <Vehicle id={12}/>  */}
               </div>
            </div>
        )
    }
}

export default MainContent;
