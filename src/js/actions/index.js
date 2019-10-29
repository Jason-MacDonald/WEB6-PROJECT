import {ADD_VEHICLE} from '../constants/index'

export function addVehicle(payload) {
    return {type: ADD_VEHICLE, payload}
}