import React from "react";
import {Col, Row} from "react-bootstrap";
import {SiKotlin, SiJetpackcompose} from "react-icons/si";
import {
    DiJavascript1,
    DiReact,
    DiGit,
    DiJava,
} from "react-icons/di";
import {TbSql} from "react-icons/tb"

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons rounded-pill">
                <SiKotlin/>
            </Col>
            <Col xs={4} md={2} className="tech-icons rounded-pill">
                <DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons rounded-pill">
                <DiJavascript1/>
            </Col>
            <Col xs={4} md={2} className="tech-icons rounded-pill">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons rounded-pill">
                <SiJetpackcompose/>
            </Col>
            <Col xs={4} md={2} className="tech-icons rounded-pill">
                <TbSql/>
            </Col>

            <Col xs={4} md={2} className="tech-icons rounded-pill">
                <DiGit/>
            </Col>


        </Row>
    );
}

export default Techstack;
