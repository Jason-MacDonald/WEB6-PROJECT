import {DATA_LOADED, CHANGE_FILTERS, LOG_IN} from '../constants/index'

// Retrieve all vehicles from the database and updates the vehicle state in the store.
export function getData() {
    return function (dispatch) {
        return fetch('http://localhost:4200/api/vehicles')
            .then(res => res.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            });
    };
}

// Takes the form information and updates the filters in the store.
export function changeFilters(payload) {
    return {type: CHANGE_FILTERS, payload}
};

export function login(payload) {
    return {type: LOG_IN, payload}
};


