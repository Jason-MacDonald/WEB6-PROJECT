import React from 'react';
import Vehicle from '../vehicle/vehicle';

import './vehicle-content.css';

class VehicleContent extends React.Component {
    render () {
        return (
            <div className='vehicle-content-main-div'>
                <div className="vehicles-wrapper">
                    <Vehicle/> 
                    <Vehicle/> 
                    <Vehicle/> 
                    <Vehicle/> 
                    <Vehicle/> 
                    <Vehicle/> 
                    <Vehicle/> 
                    <Vehicle/> 
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                </div>

                <VehicleNav/>
            </div>
        )
    }
}

class VehicleNav extends React.Component {
    render () {
        return (
            <div className="page-nav-wrapper">
                <button>First</button>
                <button>Back</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>Forward</button>
                <button>Last</button>
            </div>
        )
    }
}

export default VehicleContent;
