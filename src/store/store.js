import { compose,createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";

const middleware = [logger];

export const composeEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer,undefined,composeEnhancers);