import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';
import analytics from './middleware/analytics';

import tasksReducer from './reducers' 

const rootReducer = (state = {}, action) => {
    return {
        tasks: tasksReducer(state.tasks, action),
    };
};

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger, analytics))
); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root'));

    //Use the Webpack Hot Module Replacement feature.
    if (module.hot) {
        module.hot.accept('./App', () => {
          const NextApp = require('./App').default;
          ReactDOM.render(
            <Provider store={store}><NextApp /></Provider>,
            document.getElementById('root')
          );
        });
      
        module.hot.accept('./reducers', () => {
          const nextRootReducer = require('./reducers').default;
          store.replaceReducer(nextRootReducer);
        });
    }    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
