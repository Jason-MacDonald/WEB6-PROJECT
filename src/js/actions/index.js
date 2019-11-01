import {DATA_LOADED, CHANGE_FILTERS} from '../constants/index'

export function getData() {
    return function (dispatch) {
        return fetch('http://localhost:4200/api/vehicles')
            .then(res => res.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            });
    };
}

export function changeFilters(payload) {
    return {type: CHANGE_FILTERS, payload}
};


