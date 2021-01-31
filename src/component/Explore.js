import React, { useState, useEffect } from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row, Col, Container, Button } from 'react-bootstrap';

import ReactDOM from 'react-dom';

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import Topic from "./Topic.js";
/*<Route path={"/Explore/"+item} exact>
   <Topic language={item} />
</Route>*/
//
function Explore() {


    let [lang, setlang] = useState(null);

    let [loading, setloading] = useState(0);
    //let [rerun,setrerun]=useState(1);

    let [items, setitems] = useState(null);
    let topic = ["All", 'javascript', 'react', 'python', 'golang'];
    let topic_html = 0;
    topic_html = topic.map((item) => <Col  > <Button variant="Dark" id={item} onClick={() => { setlang(item); setloading(1); setitems(""); }} style={{ fontSize: "1rem", color: "#eb34a2" }}>{item}</Button></Col>);





    useEffect(() => {
        if (lang != null) {
            let lang_api = "https://api.github.com/search/repositories?q=stars:%3E1+language:" + lang + "&sort=stars&order=desc&type=Repositories";
            fetch(lang_api).then(response => response.json()).then(data => {
                let items = data["items"];

                items.sort((a, b) => a["stargazers_count"] < b["stargazers_count"]);

                let top_30 = items.map((item) => <div><img src={item["owner"]["avatar_url"]} /><h3>{item["full_name"]}</h3><h4>{item["stargazers_count"]}</h4></div>);
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
        <main>
            {loading ? <h1>loading</h1> : ""}
            {lang != null ? items : ''}

        </main>
    </div>

    );


}
export default Explore;