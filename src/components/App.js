import React, { Component } from 'react';
import '../styles/App.css';
import Section from '../components/Section.js';




class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse bg-primary">
        <a className="navbar-brand">Navbar</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Most important heading here</h1>
        <h3>Less important heading here</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </header>
    )
  }
}



class Form extends Component {
  render() {
    return (
      <form className="example-form">
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Example label</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Another label</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
          </form>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <nav className="fixed-footer navbar  navbar-light bg-faded">
        <a className="navbar-brand" href="#">Footer Stuff...</a>
      </nav>
    )
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
