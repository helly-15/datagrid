import { combineReducers } from 'redux'
import {dataReducer} from "./data";
import {filtersReducer} from "./filter";
import {sortReducer} from "./sort";

export const rootReducer = combineReducers({
    Data: dataReducer,
    Filter:filtersReducer,
    Sort: sortReducer,
})
