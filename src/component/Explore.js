import React, { useState, useEffect } from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row, Col, Container, Button, Card } from 'react-bootstrap';

import ReactDOM from 'react-dom';
import Loader from 'react-loader-spinner';

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import Topic from "./Topic.js";
/*<Route path={"/Explore/"+item} exact>
   <Topic language={item} />
</Route>*/
//
function Explore() {


    let [lang, setlang] = useState("All");

    let [loading, setloading] = useState(0);
    //let [rerun,setrerun]=useState(1);

    let [items, setitems] = useState(null);
    let topic = ["All", 'javascript', 'react', 'python', 'golang'];
    let topic_html = 0;
    topic_html = topic.map((item) => <Col  > <Button variant="Dark" id={item} onClick={() => { setlang(item); setloading(1); setitems(""); }} style={{ fontSize: "2rem", color: "black" }} >{item}</Button></Col>);





    useEffect(() => {
        if (lang != null) {
            let lang_api = "https://api.github.com/search/repositories?q=stars:%3E1+language:" + lang + "&sort=stars&order=desc&type=Repositories";
            fetch(lang_api).then(response => response.json()).then(data => {
                let items = data["items"];

                items.sort((a, b) => a["stargazers_count"] < b["stargazers_count"]);

                let top_30 = items.map((item) => <Card style={{ width: '18rem', padding: "1rem", margin: "1rem", backgroundColor: "steelblue" }}>
                    <Card.Img variant="top" src={item["owner"]["avatar_url"]} style={{ borderRadius: "50%", borderColor: "red" }} />
                    <Card.Body style={{ color: "white", textAlign: "center" }}>
                        <Card.Title>{item["full_name"]}</Card.Title>
                        <Card.Text>
                            <i class="bi bi-star-fill"> {item["stargazers_count"]}</i>

                        </Card.Text>

                    </Card.Body>
                </Card>);
                setitems(top_30);
                setloading(0);
            });
        }
    }
        , [lang]);

    return (<div >
        <Row >
            {topic_html}
        </Row>
        <main >


            {lang != null ? <h4 style={{ paddingTop: "1rem", color: "black" }}>Top 30 in {lang} Category.</h4> : ''}
            {loading ? <div style={{ textAlign: 'center', paddingTop: "6rem" }}><Loader type="TailSpin" color="red" height={80} width={80} /> </div> : ""}
            <> <div style={{ paddingTop: "1rem", display: "flex", flexWrap: "wrap" }}>{lang != null ? items : ''}</div></>

        </main>
    </div>

    );


}
export default Explore;
//<div style={{ border: "5px solid red", margin: "1rem" }}><img style={{ width: "4rem", height: "4rem" }} src={item["owner"]["avatar_url"]} /><p>{item["full_name"]}</p><h4>{item["stargazers_count"]}</h4></div>