import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Landingpage from "./components/Landingpage";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectSignedIn } from "./feature/userHandle";
import Navbar1 from "./components/Navbar1";
import Worldnews from "./components/Worldnews";
import "./styling/app.css";
import Articles from './components/Articles';
import { Navbar, Nav } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./app/store";




const App = () => {
  <Provider store={store}>const isSignedIn = useSelector(selectSignedIn)</Provider>;
  return (
    <div className="app">
      <Navbar1 />
      {isSignedIn && <Router>
        <header>
          <div className="App">
            <Router>
              <main>
                <div className="header">
                  <div className="row-1">
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                          <Nav.Link><Link to={"/Worldnews:business"}>Business</Link></Nav.Link>
                          <Nav.Link><Link to={"/Worldnews:science"}>Science</Link></Nav.Link>
                          <Nav.Link><Link to={"/Worldnews:technology"}>Technology</Link></Nav.Link>
                          <Nav.Link><Link to={"/Worldnews:entertainment"}>Entertainment</Link></Nav.Link>
                          <Nav.Link><Link to={"/Worldnews:health"}>Health</Link></Nav.Link>
                          <Nav.Link><Link to={"/Worldnews:sports"}>Sports</Link></Nav.Link>
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                  </div>

                  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link><Link to={"/Worldnews:London"}>London</Link></Nav.Link>
                        <Nav.Link><Link to={"/Worldnews:Birmingham"}>Birmingham</Link></Nav.Link>
                        <Nav.Link><Link to={"/Worldnews:Liverpool"}>Liverpool</Link></Nav.Link>
                        <Nav.Link><Link to={"/Worldnews:Manchester"}>Manchester</Link></Nav.Link>
                        <Nav.Link><Link to={"/Worldnews:Oxford"}>Oxford</Link></Nav.Link>
                        <Nav.Link><Link to={"/Worldnews:Cambridge"}>Cambridge</Link></Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>

                </div>
                <Switch>
                  <Route path="/:id" children={<Worldnews />} />
                </Switch>
              </main>
            </Router>
          </div>
        </header>

      </Router>}
      <Landingpage />
      {isSignedIn && <Articles />}

    </div>

  );
};


export default App;