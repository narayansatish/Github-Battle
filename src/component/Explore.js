import React from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container,Button } from 'react-bootstrap';

import ReactDOM from 'react-dom';

import { Link,Route, Switch,BrowserRouter   } from 'react-router-dom';

import Topic from "./Topic.js";
/*<Route path={"/Explore/"+item} exact>
   <Topic language={item} />
</Route>*/
//
function Explore()
    {    let topic =["All", 'javascript', 'react', 'python', 'golang'];
        console.log(topic);
         let topic_html=topic.map((item)=><Col lg={{ span:1}} xs={2}> <Button variant="Dark"><Link to={"/Explore/"+item} >{item}</Link></Button></Col>);
         console.log(topic_html);
         let switchone=topic.map((item)=><Route path={"/Explore/"+item} component={(item)=><Topic language={item}/> } exact />);
         console.log(switchone); 
        return (<div>
                    <Row>
                        {topic_html}
                    </Row>
                    <main>
                        <Switch>
                            {switchone}
                        </Switch>
                    </main>
                </div>

                );
        

    }
    export default Explore;