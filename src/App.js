import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import Landingpage from "./components/Landingpage";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectSignedIn } from "./feature/userHandle";
import Navbar1 from "./components/Navbar1";
import Breakingnews from "./components/Breakingnews";
import Entertainmentnews from "./components/Entertainmentnews";
import Worldnews from "./components/Worldnews";
import "./styling/app.css";
import Articles from './components/Articles';
import { Navbar, Nav } from "react-bootstrap";




const App = () => {
  const isSignedIn = useSelector(selectSignedIn);
  return (
      <div className="app">
        <Navbar1 /> 
        {isSignedIn && <Router>
      <header>
        <div className="App">
          <Router>
            <main>
              <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
               
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link ><Link to={"/Breakingnews"}>Breaking News</Link></Nav.Link>
                    <Nav.Link><Link to={"/Worldnews"}>World news</Link></Nav.Link>
                    <Nav.Link><Link to={"/Entertainmentnews"}>Entertainment</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Switch>
                <Route path="/Breakingnews" component={Breakingnews} />
                <Route path="/Worldnews" component={Worldnews} />
                <Route path="/Entertainmentnews" component={Entertainmentnews} />
              </Switch>
            </main>
          </Router>
        </div>
      </header>

    </Router>}
        <Landingpage />
        {isSignedIn && <Articles/>}
        
        
        

      </div>

  );
};


export default App;