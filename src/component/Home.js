import React from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row, Col, Container, Button } from 'react-bootstrap';

import ReactDOM from 'react-dom';

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import Explore from "./Explore.js";

import Battle from "./Battle.js";

function Home() {



    return (<main>
        <h1 style={{ fontSize: "1.5rem" }}>Welcome to Github Battle</h1>
        <h3>you can explore Popular and Battle page</h3>


    </main>);

}
export default Home;