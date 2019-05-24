import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css';

// import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import BookDetails from './pages/Book-Details';
import PageNotFound from './pages/404';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route
              path="/book/"
              render={({ match, location }) => (
                <BookDetails match={match} location={location} />
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(module)(AppRouter);
