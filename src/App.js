import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Profile from "./Profile/Profile.js"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// class app Component form
class App extends Component {
state ={
show: false,


};
// toggleShow state declaration
toggleShow = () => {
  this.setState({ show: !this.state.show });
};

//render function
  render() { 
    return ( 
      <div className='App'>
        <Button variant='secondary' onClick={this.toggleShow}>
          Click me !
        </Button>
        {this.state.show && <Profile />}
      </div>
     );
  }
}
 

export default App;