import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // To get React to print something to the screen,
  // define a method called `render` on the class.
  render() {
    // It must return something that React can render.
    // What is 'renderable'?
    //   - String
    //   - Number
    //   - Boolean
    //   - null
    //   - another React component
    //   - a function
    return (
      <div className="App">
        <header className="App-header">
          {
            // Here comes the mixing of HTML and JS. Notice how
            // there is a { symbol before this comment?
            // This is how we evaluate JavaScript inside
            // the `return` value of the component.
            // console.log('Hello World')

            // TODO: render the `header` prop
            this.props.header
          }
          {/* TODO: render the `header` prop inside an `h1` element */}
          <h1>{this.props.header}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
