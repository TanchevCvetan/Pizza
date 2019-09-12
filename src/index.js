import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
if(localStorage.getItem('cartItems')){
    initialState.cart = {items:JSON.parse(localStorage.getItem('cartItems'))}
}


const store = createStore(rootReducer, initialState, composeEnchancer(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.querySelector('#root')
);