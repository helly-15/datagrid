import { combineReducers } from 'redux'
import { rowsReducer } from './rows'
import { columnsReducer } from './columns'
import {dataReducer} from "./data";

export const rootReducer = combineReducers({
    Rows: rowsReducer,
    Columns: columnsReducer,
    Data: dataReducer,
})
