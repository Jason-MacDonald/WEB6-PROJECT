// Imports the constatnts to be used in the reducer for action.type.
import {DATA_LOADED, CHANGE_FILTERS, LOG_IN} from '../constants/index'

// Retrieve all vehicles from the database and updates the vehicle state in the store.
export function getData() {
    // Little confusing here but works.
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

// TODO: implement proper login functionality, maybe attempt with token such as JWS.
export function login(username, password) {
    return function (dispatch) {
        return fetch(`http://localhost:4200/api/accounts/${username}/${password}`)
            .then(res => res.json())
            .then(json => {
                dispatch({type: LOG_IN, payload: json})
            })
    }
};