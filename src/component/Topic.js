import React,{ useState }  from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Row,Col,Container } from 'react-bootstrap';

import ReactDOM from 'react-dom';

import { Link,Route, Switch,BrowserRouter   } from 'react-router-dom';

function Topic(props)
        {   let lang_api = "https://api.github.com/search/repositories?q=stars:%3E1+language:"+props.language+"&sort=stars&order=desc&type=Repositories";
          //  let [count,setcount]=useState(0);
           // let  [items, setitems] = useState(fetch(lang_api).then(response => response.json()).then(data =>data.items));
            let  hey;
           fetch(lang_api).then(response => response.json()).then(data =>{
                let items=data["items"];
                
                items.sort((a,b)=>a["stargazers_count"]<b["stargazers_count"]);

                let top_30=items.map((item)=><div><img src={item["owner"]["avatar_url"]} /><h3>item["full_name"]</h3><h4>{item["stargazers_count"]}</h4></div>);
                     
                hey=top_30;


                    
            }); 
            console.log(hey);
            //console.log(items);  
        /* let data=fetch(lang_api)
        .then(response => response.json())
        .then(data => this.setState({ data }));*/
            return (<div>
                <h1>Welcome to  our Topic {props.language}</h1>
                {hey}
            </div>);



        }

 export default Topic;