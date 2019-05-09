import React,{Component} from 'react';
import './App.css';
import AppNav from './components/AppNav';
import Form from './components/Form';


import {withStyles} from '@material-ui/core/styles';
import Albums from './containers/Albums';

class App extends Component {
  
  render(){
  return (
    <div className="App">
        <AppNav/>
        <Albums/>
        <Form/>
    </div>
  );
}
}

export default withStyles({
  button:{
    background:"primary"
  }
}) (App);
