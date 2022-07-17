import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { IRootState, rootReducer } from './reducers/RootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<IRootState>, logger)
    // other store enhancers if any
  )
);
