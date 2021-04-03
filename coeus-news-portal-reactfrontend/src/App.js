import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from "react";
import Dashboard from './components/Dashboard/Dashboard';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NewArticles from './components/NewArticles/NewArticles';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <div className="App">
            <Router>
              <main>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                  <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand">Coeus News Portal</a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                      <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-link active">
                          <Link to="/Home">Home</Link>
                        </li>
                        <li className="nav-link">
                          <Link to={"/Dashboard"}>Dashboard</Link>
                        </li>
                        <li className="nav-link">
                          <Link to="/NewArticles">Create New Articles</Link>
                        </li>
                      </ul>
                      <button className="btn-dbpg btn-sm" type="submit">Logout</button>
                    </div>
                  </div>
                </nav>
                <Switch>
                  <Route path="/Home" component={Home} />
                  <Route path="/Dashboard" component={Dashboard} />
                  <Route path="/NewArticles" component={NewArticles} />
                </Switch>
              </main>
            </Router>
          </div>
        </header>
        <Footer />
      </Router>
    );
  }
}


export default App;