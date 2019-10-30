// import React from 'react';
// import Vehicle from '../vehicle/vehicle';

// import './main-content.css';

// // returns the main section of the index page which includes a large image over layed with a search form.
// class MainContent extends React.Component {
  
//     constructor(props) {
//         super(props);
//         this.state = ({
//             // Appears to be required here to be set later.
//             data: 'test'
//         })
//     }

//     // Returns a list of featured vehicles. This is then passed on to Vehicle.
//     componentDidMount() {
//         fetch('http://localhost:4200/api/featured')
//             .then(res => res.json())
//             .then(data => {
//                 this.setState({
//                     data: data
//                 })
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
    
//     render () {
//         // Each Vehicle component is passed ALL data and an index.
//         // TODO: Ony send data for one vehicle (Re-evaluate as it didn't seem to work how I thought it would)
//         return (
//             <div className='vehicle-content-main-div'>
//                 <div className="vehicles-wrapper">
//                     <Vehicle id={0} dataFromParent={this.state.data}/>
//                     <Vehicle id={1} dataFromParent={this.state.data}/>
//                     <Vehicle id={2} dataFromParent={this.state.data}/>
//                     <Vehicle id={3} dataFromParent={this.state.data}/>
//                     <Vehicle id={4} dataFromParent={this.state.data}/>
//                     <Vehicle id={5} dataFromParent={this.state.data}/>
//                     <Vehicle id={6} dataFromParent={this.state.data}/>
//                     <Vehicle id={7} dataFromParent={this.state.data}/>                    
//                 </div>
//             </div>
//         )
//     }     
// }

// export default MainContent;
