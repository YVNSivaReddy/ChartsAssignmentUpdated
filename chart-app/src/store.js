import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//const initialState = {};

const middleware = [thunk];

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        const parsedState = JSON.parse(serializedState);
        if (parsedState === null || parsedState.charts.length === 0) {
            return undefined;
        }
        return parsedState;
    } catch (e) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};

const peristedState = loadState();

const store = createStore(
    rootReducer,
    peristedState,
    composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
    saveState(store.getState());
});


export default store;