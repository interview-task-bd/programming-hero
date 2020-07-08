import { combineReducers } from 'redux';
import reducers from './reducer';

const rootReducers = combineReducers(
    {
       all:reducers
    }
);

export default rootReducers;