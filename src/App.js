import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    storename: ['nisha', 'varun', 'daizy']
  }

  saveNameHandler= (input)=> {
    this.setState({storename: [...this.state.storename,input.target.value]}) 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome! </h1>
        </header>
        <p>Enter your name </p>
        <form>
          <input type="text" className="form-control" onChange={this.saveNameHandler} />
        </form>
        <button type="submit" >save</button>
        <p>List of Name you entered</p>
        {this.state.storename.map((n)=>{
          return <div>
            {n}
            <br />
          </div>
        })}
      </div>
    );
  }
}

export default App;
