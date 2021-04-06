import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from "react";
import Dashboard from './components/Dashboard/Dashboard';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NewArticles from './components/NewArticles/NewArticles';
import Footer from './components/Footer/Footer';
import { Navbar, Nav } from "react-bootstrap";


const App = () => {
  return (
    <Router>
      <header>
        <div className="App">
          <Router>
            <main>
              <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Coeus News Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link ><Link to={"/Home"}>Home</Link></Nav.Link>
                    <Nav.Link><Link to={"/Dashboard"}>Dashboard</Link></Nav.Link>
                    <Nav.Link><Link to="/NewArticles">Create New Articles</Link></Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">Login</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
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


export default App;