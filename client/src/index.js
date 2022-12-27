import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';
import './index.css';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
console.log(store.getState());
// By this point, the App component has already been rendered to the DOM
ReactDOM.render(
     <Provider store={store}>
        <App />
     </Provider>    
        , document.getElementById('root')
);