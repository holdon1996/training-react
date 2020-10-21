import { GET_DATA } from "./DataTypes"
import { INSERT_DATA } from "./DataTypes"
import dataSource from '../data.json'

const initialState = {
    data: []
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: return {
            ...state,
            data: dataSource
        }

        case INSERT_DATA: return {
            ...state,
            data: dataSource.push({
                "id": 7,
                "roll": "課長3",
                "active": "true"
            })
        }
        default: return state
    }
}

export default dataReducer;
