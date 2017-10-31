import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;