import { GET_DATA } from './DataTypes'
import { INSERT_DATA } from './DataTypes'
export const getData = () => {
    return {
        type: GET_DATA
    }
}

export const insertData = () => {
    return {
        type: INSERT_DATA
    }
}
