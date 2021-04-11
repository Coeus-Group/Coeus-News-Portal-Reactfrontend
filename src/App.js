import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import Landingpage from "./Components/Landingpage";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectSignedIn } from "./feature/userHandle";




const App = () => {
  return (
      <div className="app">
        <Landingpage />
      </div>
    // <Router>
    //   <header>
    //     <div className="App">
    //       <Router>
    //         <main>
    //           <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    //             <Navbar.Brand href="#home">Coeus News Portal</Navbar.Brand>
    //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //             <Navbar.Collapse id="responsive-navbar-nav">
    //               <Nav className="mr-auto">
    //                 <Nav.Link ><Link to={"/Home"}>Home</Link></Nav.Link>
    //                 <Nav.Link><Link to={"/Dashboard"}>Dashboard</Link></Nav.Link>
    //                 <Nav.Link><Link to="/NewArticles">Create New Articles</Link></Nav.Link>
    //               </Nav>
    //             </Navbar.Collapse>
    //           </Navbar>
    //           <Switch>
    //             <Route path="/Home" component={Home} />
    //             <Route path="/Dashboard" component={Dashboard} />
    //             <Route path="/NewArticles" component={NewArticles} />
    //             <Route path="/Login" component={Login} />
    //           </Switch>
    //         </main>
    //       </Router>
    //     </div>
    //   </header>
    //   <Footer />
    // </Router>
  );
};


export default App;