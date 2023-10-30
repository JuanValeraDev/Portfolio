import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "jaja",
                    "jeje",
                    "jajajajajajaajaj",
                    "jiji",
                    "JOJOJOJOJOJOJOJOJOJOJ"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
