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


// A function that returns a function: partial evaluation.
// A function that takes a single argument and
// returns a function that takes a single argument: curry.
// We use these techniques to bundle stateful data together
//    alpha = func1 => func2 => func3 => {logic}
//    alpha('value_one')(2)('value_3')
// The functions invoke will from left to right.
// Once the farthest right function is called,
// all of the code will evaluate. Data on the left-end-side
// are things we know ahead of time, while data on the
// right-end-side are things we will learn later.

const add = (arg1, arg2, arg3) => {
  return arg1 + arg2 + arg3
}
// console.log(add(10, 1, 1))
// becomes
const addCurry = arg1 => arg2 => arg3 => {
  return arg1 + arg2 + arg3
}
const addCurryImplictReturn = arg1 => arg2 => arg3 => (
  arg1 + arg2 + arg3
)
//console.log(addCurryImplictReturn(10)(1)(1))

// we can reuse functions
const plusOnehundred = addCurryImplictReturn(0)(100)
//console.log(plusOnehundred(500))


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

  // 0 TODO: Add a favorites array to state
  state = {
    searchTerm: 'Initial Search',
    gifs: [],

  }

  setSearchTerm = event => {
    this.setState({ searchTerm: event.target.value })
  }

  setGifs = gifs => {
    this.setState({ gifs })
  }

  // We have seen how this.setState takes an object,
  // it can also take a function. React gives you
  // the previous state state as a arguement.
  // 1 TODO: write a function that adds one favorite to the others
  addToFavorites = favoriteGif => {

  }

  onSearch = value => event => {
    fetchGifs(value)
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
            <button onClick={this.onSearch(this.state.searchTerm)}>
              Go
            </button>
          </Search>
          {/* 2 TODO: add a button to save a gif to your favorites */}
          {this.state.gifs.map(gif =>
            <Image src={gif.image.url} title={gif.title} />
          )}
          {/* 3 TODO: render your favorites */}
          
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
