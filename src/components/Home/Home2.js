import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/home-thinker.svg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn, FaMedium} from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.6em"}}>
                            Bienvenido a <span className="purple"> mi Porfolio </span>
                        </h1>
                        <p className="home-about-body">
                            Aquí encontrarás información sobre
                            <i>
                                <b className="purple"> mi trabajo </b>
                            </i>
                            y sobre <i>
                            <b className="purple"> mí </b>
                        </i>
                            <br/>
                            <br/>
                            No dudes en contactarme, <i>
                            <b className="purple"> estoy a un click </b>
                        </i>
                            <br/>
                            <br/>
                            <i><b>¿Trabajamos juntos?</b></i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>Mis redes</h1>
                        <p>
                            Conecta <span className="purple">conmigo </span>
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Juan-AchoYo"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/juan-valera-reales/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://medium.com/@valera-reales-juan"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <FaMedium/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
