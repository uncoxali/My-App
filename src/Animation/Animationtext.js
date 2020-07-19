import React from "react";
import Typical from 'react-typical'

function Animationtext() {
    return (
        <>
            <Typical
                steps={['Welcome',
                    2000, 'Im Developer React js!',
                    5000, 'HTML-5', 500, 'CSS-3', 500,
                    'BOOTSTRAP', 500, 'JAVASCRIPT', 500,
                    'REACT', 500, 'DONE', 10000]}
                loop={Infinity}
                wrapper="span"
            />
        </>
    )
}

export default Animationtext;

