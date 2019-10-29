import {ADD_VEHICLE} from '../constants/index'

export function AddVehicle(payload) {
    return {type: ADD_VEHICLE, payload}
}