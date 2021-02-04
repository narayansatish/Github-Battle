import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./component/Home.js";

import Explore from "./component/Explore.js";
import Battle from "./component/Battle.js";

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row, Col, Container, Button } from 'react-bootstrap';
import Topic from './component/Topic';

function App() {

  let navbar = (
    <Container fluid style={{ backgroundColor: '', color: "#c46666" }} >
      <Row>

        <Col lg={1} xs={4}> <Button variant="Dark" ><Link to="/Explore" style={{ fontSize: "1.5rem" }}>Explore</Link></Button></Col>
        <Col lg={1} xs={4}><Button variant="Dark" ><Link to="/" style={{ fontSize: "1.5rem" }}>Battle</Link> </Button></Col>
      </Row>
    </Container>

  );
  let s = (<div>
    {navbar}
    <div className="container">
      <Switch>

        <Route path="/Explore" component={Explore} exact />
        <Route path="/" component={Battle} exact />
      </Switch>
    </div>

  </div>);


  return (s);
}

export default App;