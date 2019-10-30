import React from 'react';

//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {render} from "react-dom";
import {Provider} from "react-redux";
import store from './js/store/index';
import {addVehicle} from './js/actions/index'

window.store = store;
window.addVehicle = addVehicle;

//ReactDOM.render(<App />, document.getElementById('root'));

// Provider wraps up the React application and make it aware of the entire Redux store.
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
