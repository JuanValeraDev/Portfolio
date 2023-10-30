import React from "react";
import Card from "react-bootstrap/Card";
import {ImHammer, ImCheckmark, ImClock} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        ¡Hola, muy buenas! Soy <span className="purple">Juan Valera </span>
                        de <span className="purple"> Murcia, España.</span>
                        <br/>
                        <br/>
                        En mi opinión, el desarrollo de software exige un equilibrio entre las habilidades
                        técnicas y las relaciones personales.
                        <br/>
                        <br/>
                        Lo que más me gusta de esta profesión es cómo une a las personas para trabajar juntas frente a
                        un objetivo común.
                        <br/>
                        <br/>

                    </p>
                    <p className={"justify-content-start"}>Me encanta programar porque...</p>
                    <ul>
                        <li className="about-activity">
                            <ImHammer style={{marginRight:"10px"}}/> me permite crear cualquier cosa desde cero.
                        </li>
                        <li className="about-activity">
                            <ImClock style={{marginRight:"10px"}}/> puedo entrar en estado de flujo y perder la noción del tiempo.
                        </li>
                        <li className="about-activity">
                            <ImCheckmark style={{marginRight:"10px"}}/> me siento útil y responsable.
                        </li>
                    </ul>

                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
