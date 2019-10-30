import React from 'react';
//import Faker from 'faker';

import './vehicle.css';

class Vehicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: ''
        })
    }

    // Uses dataFromParent to populate data within component. 
    render() {
        // Makes sure a record exists.
        if(this.props.dataFromParent[this.props.id] != null)
        {
            return (
                <div className='vehicle-main-div'>
                    <img alt='Vehicle' src={require('../../img/blue-flower.jpeg')} />
                    <h4>{this.props.dataFromParent[this.props.id].year} {this.props.dataFromParent[this.props.id].make} {this.props.dataFromParent[this.props.id].model}</h4>
                    <p>{this.props.dataFromParent[this.props.id].transmission}</p>
                    <h4 id='kms'>{this.props.dataFromParent[this.props.id].kms} kms</h4>
                    <h4 id='price'>${this.props.dataFromParent[this.props.id].price}</h4>
                    <p id='location'>{this.props.dataFromParent[this.props.id].location}</p>
                    
                </div>
            )
        }
        return null;
   
    }
}

export default Vehicle;
