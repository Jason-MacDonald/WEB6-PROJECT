import React from 'react';
import Vehicle from './vehicle';

class VehicleContent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    render () {
        return (
            <div>
                <h2>Featured Vehicles</h2>
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

                <VehicleNav/>
            </div>
        )
    }
}

class VehicleNav extends React.Component {
    render () {
        return (
            <div>
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
