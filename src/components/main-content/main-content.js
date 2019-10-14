import React from 'react';
import Vehicle from '../vehicle/vehicle';

import './main-content.css';

class MainContent extends React.Component {
  
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
            </div>
        )
    }     
}

export default MainContent;
