import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import firebase from './initializers/firebase';

import {setUser,clearUser} from './initializers/actions';

import store from './initializers/store';

firebase.auth().onAuthStateChanged((user)=>{
    console.log(user);
    if(user){
      //hay inicio de sesoon
      store.dispatch(setUser(user));
    }else{
     //no hay inicio de sesion
     store.dispatch(clearUser(user));
    }
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
