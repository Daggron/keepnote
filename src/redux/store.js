import { createStore, compose, applyMiddleware } from 'redux';
import NotesReducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(NotesReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;