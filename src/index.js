import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// JSX
// JavaScript that looks like HTML. It's not HTML, it's JavaScript!
//
// <div /> === React.createElement('div')
//
// You write JS now, and JS (React) will tell the
// HTML page how to change the elments (DOM) for you.

ReactDOM.render(
  <App
    // props are passed into a component
    // 0 TODO: pass a prop named `header` into `App`
    header='Handful of gifs'
  />, document.getElementById('root'));

// Is actually
// React.createElement(App, { header: 'Handful of gifs' })

// When a component receives props,
// it's a function getting arguments.
// You'll have these available later when you define
// what the `App` function or class looks like.

// JSX is a convient mixture of JS and HTML
// Easier to write event handlers (JS) and
// the HTML elments they are attached to.
