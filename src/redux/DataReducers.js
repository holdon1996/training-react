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
            data: [...state.data, {
                "id": 7,
                "roll": "課長3",
                "active": "true"
            }]
        }
        default: return state
    }
}

export default dataReducer;
