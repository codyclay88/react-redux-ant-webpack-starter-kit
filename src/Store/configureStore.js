import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import initialState from '../Reducers/initialState';

export default function configureAdminStore() {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}