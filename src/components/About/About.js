import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/JuanValeraFoto.png";

function About() {
    return (
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col
                        md={5}
                        style={{

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            paddingTop: "30px",
                            paddingBottom: "30px"
                        }}

                        className="about-img"
                    >
                        <Col>
                            <img src={laptopImg} alt="about" className="img-fluid card shadow-lg w-75 h-75"/>
                        </Col>
                    </Col>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{fontSize: "2.1em", paddingBottom: "20px", textAlign: "center"}}>
                            Un poquito de <strong className="purple">mí</strong>
                        </h1>
                        <Aboutcard/>
                    </Col>

                </Row>
                <h1 className="project-heading" style={{textAlign: "center"}}>
                    Mis habilidades <strong className="purple">técnicas </strong>
                </h1>

                <Techstack/>

            </Container>
        </Container>
    );
}

export default About;
