// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addVehicle } from "../../js/actions/index"

// function mapDispatchToProps(dispatch) {
//     return {
//         addVehicle: vehicle => dispatch(addVehicle(vehicle))
//     };
// } 

// class ConnectedForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             make: ""
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ [event.target.id]: event.target.value });
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         const {make} = this.state;
//         this.props.addVehicle({make});
//         this.setState({make: ""});
//     }

//     render() {
//         const { make } = this.state;
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div>
//                     <label htmlFor="make">Add Vehicle</label>
//                     <input
//                         type="text"
//                         id="make"
//                         value={make}
//                         onChange={this.handleChange}
//                     />
//                 </div>
//                 <button type="submit">Add</button>
//             </form>
//         )
//     }
// }

// const TestForm = connect (
//     null,
//     mapDispatchToProps
// )(ConnectedForm);

// export default TestForm;