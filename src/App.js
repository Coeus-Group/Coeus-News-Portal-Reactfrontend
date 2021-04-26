import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import Dashboard from './components/Dashboard/Dashboard';
import { Link, BrowserRouter as Router, Route, Switch, withRouter, useParams } from 'react-router-dom';
import Home from './components/Home/Home';
import NewArticles from './components/NewArticles/NewArticles';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import { Navbar, Nav } from 'react-bootstrap';

const App = () => {

  return (
    <Router>
      <header>
        <div className="App">
          <Router>
            {/* <Menu /> */}
            <main>
              <div className="header">
                <div className="row-1">
                  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Brand href="/home:topheadlines">Coeus News Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                      </Nav>
                      <Nav>
                        <Nav.Link><Link to="/Home:London">London</Link></Nav.Link>
                        <Nav.Link><Link to="/Home:Birmingham">Birmingham</Link></Nav.Link>
                        <Nav.Link><Link to="/Home:Manchester">Manchester</Link></Nav.Link>
                        <Nav.Link><Link to="/Home:Oxford">Oxford</Link></Nav.Link>
                        <Nav.Link><Link to="/Home:Liverpool">Liverpool</Link></Nav.Link>
                        <Nav.Link><Link to="/Home:Cambridge">Cambridge</Link></Nav.Link>
                        <Nav.Link><Link to="/Login">Logout</Link></Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </div>
                <Navbar bg="dark" expand="md">
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link ><Link to="/Home:topheadlines">Top Headlines</Link></Nav.Link>
                      <Nav.Link><Link to="/Home:business">Business</Link></Nav.Link>
                      <Nav.Link><Link to="/Home:sports">Sports</Link></Nav.Link>
                      <Nav.Link><Link to="/Home:science">Science</Link></Nav.Link>
                      <Nav.Link><Link to="/Home:technology">Technology</Link></Nav.Link>
                      <Nav.Link><Link to="/Home:entertainment">Entertainment</Link></Nav.Link>
                      <Nav.Link><Link to="/Home:health">Health</Link></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
              <Switch>
                <Route path="/:id" children={<Home />} />
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