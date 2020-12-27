import React from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container } from 'react-bootstrap';

import ReactDOM from 'react-dom';

import { Link,Route, Switch,BrowserRouter   } from 'react-router-dom';


function Battle()
    {let player1_onclick=()=>{


                              }  ;
     let empty_username=<div class="alert alert-danger" role="alert">
     Empty Username!!!!!!!!!!!!
   </div>   
     let Github_input=( <div>
        <Row>
             <Col><label for="player1_box">player1</label>
            <input type="text" class="form-control" id="player1_box"  placeholder="Github Username "/></Col>
             <Col><label for="player2_box">player2</label>
                <input type="text" class="form-control" id="player2_box"  placeholder="Github Username"/></Col>
        </Row>
        <Row>
            <Col><button type="button" class="btn btn-warning" id="player1">Get first user info </button></Col>
            <Col><button type="button" class="btn btn-warning" id="player2">Get second user info</button></Col>
        </Row>
            </div>);
        return <div>
            <h1>Github Battle</h1>
            {empty_username}
         {Github_input}
         
        </div>;
        
        

    }
    export default Battle;