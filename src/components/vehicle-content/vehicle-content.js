import React from 'react';
import Vehicle from '../vehicle/vehicle';

import './vehicle-content.css';

class VehicleContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            data: 'test'
        })
    }

    componentDidMount() {
        fetch('http://localhost:4200/api/vehicles')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    render () {
        return (
            <div className='vehicle-content-main-div'>
                <div className="vehicles-wrapper">
                    <Vehicle id={0} dataFromParent={this.state.data}/>
                    <Vehicle id={1} dataFromParent={this.state.data}/>
                    <Vehicle id={2} dataFromParent={this.state.data}/>
                    <Vehicle id={3} dataFromParent={this.state.data}/>
                    <Vehicle id={4} dataFromParent={this.state.data}/>
                    <Vehicle id={5} dataFromParent={this.state.data}/>
                    <Vehicle id={6} dataFromParent={this.state.data}/>
                    
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
