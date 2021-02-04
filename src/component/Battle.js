import React, { useState, useEffect } from "react";

import {
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    Nav,
    Row,
    Col,
    Container,
} from "react-bootstrap";

import ReactDOM from "react-dom";
import Loader from "react-loader-spinner";

import { Link, Route, Switch, BrowserRouter } from "react-router-dom";

function Battle() {

    let [userName1, setUserName1] = useState("");
    let [userName2, setUserName2] = useState("");

    let [user1Status, setUser1Status] = useState("input");

    let [user2Status, setUser2Status] = useState("input");

    let [user1Repo, setUser1Repo] = useState(null);

    let [user2Repo, setUser2Repo] = useState(null);

    let [user1Info, setUser1Info] = useState(null);

    let [user2Info, setUser2Info] = useState(null);

    let [user1Score, setUser1Score] = useState(null);

    let [user2Score, setUser2Score] = useState(null);

    let [user1result, setUser1Result] = useState(null);
    let [user2result, setUser2Result] = useState(null);

    function starSum(data) {
        let n = 0;
        console.log(data);
        for (let i = 0; i < data.length; i++)
            n += data[i]["stargazers_count"];
        return n;
    }
    let player1_OnChange = (e) => {
        setUserName1(e.target.value);
    };

    let player2_OnChange = (e) => {
        setUserName2(e.target.value);
    };

    let player1_getinfo = () => {
        setUser1Info("loading");
        let profile_api = "https://api.github.com/users/" + userName1;
        fetch(profile_api)
            .then((response) => response.json())
            .then((data) => {
                setUser1Info(data);
                setUser1Status("profile");
            });
        let repo_api =
            "https://api.github.com/users/" +
            userName1 +
            "/repos?per_page=100";
        fetch(repo_api)
            .then((response) => response.json())
            .then((data) => {
                setUser1Repo(data);
            });
    };

    let player2_getinfo = () => {
        let profile_api = "https://api.github.com/users/" + userName2;
        setUser2Info("loading")
        fetch(profile_api)
            .then((response) => response.json())
            .then((data) => {
                setUser2Info(data);
                setUser2Status("profile");
            });
        let repo_api =
            "https://api.github.com/users/" +
            userName2 +
            "/repos?per_page=100";
        fetch(repo_api)
            .then((response) => response.json())
            .then((data) => {
                setUser2Repo(data);
            });
    };

    let userInput1,
        input1 = (
            <div>
                <Row>
                    <Col>
                        <label for="player1_box">
                            player1
                                                </label>
                        <input
                            type="text"
                            className="form-control"
                            value={userName1}
                            onChange={
                                player1_OnChange
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button
                            type="button"
                            className="btn btn-warning mt-3"
                            id="player1"
                            onClick={
                                player1_getinfo
                            }
                        >
                            Get first user info{" "}
                        </button>
                    </Col>
                </Row>
            </div>
        );

    let onClickOnBattle = () => {
        let user1 = user1Info["followers"] + starSum(user1Repo),
            user2 = user2Info["followers"] + starSum(user2Repo);
        if (user1 == user2) {
            setUser1Result("We are same");
            setUser2Result("We are same");
        } else {
            if (user1 > user2) {
                setUser1Result("WINNER");
                setUser2Result("lOSER");
            } else {
                setUser2Result("WINNER");
                setUser1Result("LOSER");
            }
        }
        setUser1Score(user1);
        setUser2Score(user2);
    };
    if (user1Info != null) {
        if (user1Info.length == 2) {
            userInput1 = (
                <div>
                    <h3>"Not Found"</h3>
                    <button
                        type="button"
                        className="btn btn-primary"
                        id="player1"
                        onClick={() => {
                            setUserName1(null);
                            setUser1Info(null);
                        }}
                    >
                        Reset{" "}
                    </button>
                </div>
            );
            user1Status = "input";
        } else {
            if (user1Info == "loading")
                userInput1 = <Loader type="Circles" color="#00BFFF" style={{ height: "1.5rem", width: "1.5rem" }} />;

            else
                userInput1 = (
                    <div>
                        <img style={{ width: "80%" }}
                            src={user1Info["avatar_url"]}
                        ></img>
                        <h3 className="text-center" style={{ fontSize: "1.5rem" }}>
                            {user1Info["login"]}
                        </h3>
                        <Row style={{ fontSize: "1.5rem" }}>
                            <Col >
                                Follower:
                                                        {user1Info["followers"]}
                            </Col>
                            <Col>
                                Following:
                                                        {user1Info["following"]}
                            </Col>
                        </Row>
                        <button
                            style={{ fontSize: "1.5rem" }}
                            type="button"
                            className="btn btn-primary"
                            id="player2"
                            onClick={() => {
                                setUserName1(null);
                                setUser1Info(null);
                                setUser1Result(null);
                                setUser1Status("input");
                                setUser2Result(null);

                            }}
                        >
                            Reset{" "}
                        </button>
                    </div>
                );
        }
    } else userInput1 = input1;
    console.log(userInput1);

    let userInput2,
        input2 = (
            <div>
                <Row>
                    <Col>
                        <label for="player2_box">
                            player2
                                                </label>
                        <input
                            type="text"
                            className="form-control"
                            value={userName2}
                            onChange={
                                player2_OnChange
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button
                            type="button"
                            className="btn btn-warning mt-3"
                            onClick={
                                player2_getinfo
                            }
                        >
                            Get Second user info{" "}
                        </button>
                    </Col>
                </Row>
            </div>
        );

    if (user2Info != null) {
        if (user2Info.length == 2) {
            userInput2 = (
                <div>
                    <h3>"Not Found"</h3>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            setUserName2(null);
                            setUser2Info(null);
                        }}
                    >
                        Reset{" "}
                    </button>
                </div>
            );
            user2Status = "input";
        } else {
            if (user2Info == "loading")
                userInput2 = <Loader type="Circles" color="#00BFFF" style={{ height: "1.5rem", width: "1.5rem" }} />;

            else
                userInput2 = (
                    <div>
                        <img style={{ width: "80%" }}
                            src={user2Info["avatar_url"]}
                        ></img>
                        <h3 className="text-center" style={{ fontSize: "1.5rem" }}>
                            {user2Info["login"]}
                        </h3>
                        <Row style={{ fontSize: "1.5rem" }}>
                            <Col>
                                Follower:
                                                        {user2Info["followers"]}
                            </Col>
                            <Col>
                                Following:
                                                        {user2Info["following"]}
                            </Col>
                        </Row>
                        <button
                            style={{ fontSize: "1.5rem" }}
                            type="button"
                            className="btn btn-primary"
                            id="player2"
                            onClick={() => {
                                setUserName2(null);
                                setUser2Info(null);
                                setUser2Result(null);
                                setUser2Status("input");
                                setUser1Result(null);
                            }}
                        >
                            Reset{" "}
                        </button>
                    </div>
                );
        }
    } else userInput2 = input2;
    return (
        <div >
            <h1 className="mb-5">Github Battle</h1>
            {user1result != null && user2result != null ? (
                <Row style={{ fontSize: "1.5rem" }}>
                    <Col className="text-center" style={{ color: "#1a1a2e" }} >
                        <Row >{user1result}</Row>
                        <Row>Score={user1Score} </Row>
                    </Col>
                    <Col className="text-center" xs={{ offset: 2 }}>
                        <Row >{user2result}</Row>
                        <Row>Score={user2Score} </Row>
                    </Col>
                </Row>
            ) : (
                ""
            )
            }
            <Row>
                <Col >{userInput1}</Col>
                <Col xs={{ offset: 1 }}> {userInput2}</Col>
            </Row>
            {
                user1Status == "profile" &&
                    user2Status == "profile" &&
                    user1result == null &&
                    user2result == null ? (
                    <div className="text-center">
                        <button
                            type="button"
                            className="btn btn-success mt-5 "
                            onClick={onClickOnBattle}
                            style={{ fontSize: "2rem" }}
                        >
                            BATTLE{" "}
                        </button>
                    </div>
                ) : (
                    ""
                )
            }
            { console.log(user1Status, "1status", user2Status, "2status", user1result, "1result", user2result, "2result")}
        </div>
    );
}
export default Battle;
