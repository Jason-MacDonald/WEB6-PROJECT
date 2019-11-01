import { ADD_VEHICLE, DATA_LOADED, } from '../constants/index'

export function addVehicle(payload) {
    return { type: ADD_VEHICLE, payload };
}

export function getData() {
    return function (dispatch) {
        return fetch('http://localhost:4200/api/vehicles')
            .then(res => res.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            });
    };
}


