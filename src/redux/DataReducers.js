import { GET_DATA } from "./DataTypes"
import { INSERT_DATA } from "./DataTypes"
import dataSource from '../data.json'

const initialState = {
    data: []
}

const dataReducer = (state = initialState, action) => {
    console.log(state.data);
    switch (action.type) {
        case GET_DATA: return {
            ...state,
            data: state.data.length > 0 ? state.data : dataSource
        }

        case INSERT_DATA: return {
            ...state,
            data: [...state.data, action.data]
        }
        default: return state
    }
}

export default dataReducer;
