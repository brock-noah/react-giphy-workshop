// how you can link files together is with
// the import syntax for es2015+
// imports can be anything
//   - object, function, string, etc
// console.log(React)
// you can deconstruct keys of an import
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gifSeacher from 'react-giphy-workshop-gif-searcher'


const fetchGifs = gifSeacher('REPLACE_ME_API_KEY')
// console.log(fetchGifs('hello world').then(console.log))

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

function Search(props) {
  return (
    <React.Fragment>
      <label>Search</label>
      <input value={props.value} onChange={props.onChange} type='search' />
      {props.children}
    </React.Fragment>
  )
}

class App extends Component {

  // class components can have properties and methods
  // this.props  object, defined by parent
  // this.state  object, defined by component
  // this.setState  function from React.Component, how to set this.state

  // 0 TODO: add an empty array for gifs into state
  state = {
    searchTerm: 'Initial Search',
    gifs: [],
  }

  setSearchTerm = event => {
    this.setState({ searchTerm: event.target.value })
  }

  // 1 TODO: Add a function that sets state for the gifs array
  setGifs = gifs => {
    this.setState({ gifs })
  }

  // 2 TODO: Add a function that will call fetchGifs (the
  //         function we initilalized in the top level),
  //         it should take your search word state.
  //         Once we have this data, supply it to the
  //         funtion you wrote above in 1 TODO
  onSearch = event => {
    fetchGifs(this.state.searchTerm)
      // .then(data => { this.setGifs(data) })
      .then(this.setGifs)
      .catch(console.error)
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
          <Search
            value={this.state.searchTerm}
            onChange={this.setSearchTerm}
          >
          {/* 3 TODO: Search for gifs when I click this button.
                      After this step, we need to render those gifs. */}
            <button onClick={this.onSearch}>
              Go
            </button>
          </Search>
          {/* 4 TODO: map over the gifs array in state
                      and pass each gif to the Image component */}
          {this.state.gifs.map(gif =>
            <Image src={gif.image.url} title={gif.title} />
          )}
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
