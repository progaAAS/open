import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import tableReduser from "./table";
import filtersReduser from "./filter";
import headersReduser from "./headers";

let reducers = combineReducers({
    table: tableReduser,
    filters: filtersReduser,
    headers: headersReduser
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


window.store = store;


export default store;