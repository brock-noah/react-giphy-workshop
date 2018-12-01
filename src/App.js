import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// The simplest way to define what to render
// is to use a function. It takes a single argument,
// called props. Data and functions enter your component
// from props, they give a component everything it needs.
// JSX elements must have one parent.

function Image(props) {
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <img src={props.src} className="App-logo" alt={props.title} />
    </React.Fragment>
  )
}

// 2 TODO: write a React function that has an
//       `label` and `input` element
function Search(props) {
  return (
    <React.Fragment>
      <label>Search</label>
      <input value={props.value} onChange={props.onChange} type='search' />
    </React.Fragment>
  )
}

class App extends Component {

  // class components can have properties and methods
  // this.props  object, defined by parent
  // this.state  object, defined by component
  // this.setState  function from React.Component, how to set this.state

  // 0 TODO: set an initial search term
  state = {
    searchTerm: 'Initial Search'
  }

  setSearchTerm = event => {
    // 1 TODO: use `this.setState` to update the search term
    this.setState({ searchTerm: event.target.value })
  }

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
            this.props.header
          }
          <h1>{this.props.header}</h1>
          {/* 3 TODO: use a `Search` component, pass in the
                    props it will need, the search value and
                    a way to change the search value. */}
          <Search
            value={this.state.searchTerm}
            onChange={this.setSearchTerm}
          />
          <Image src={logo} title="Some Image" />
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
