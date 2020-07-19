import React from "react";
import './footer.css';

function Footer() {
    return (
        <>
            <footer className="mt-5 container card-footer" style={{backgroundColor: "silver", bottom: 0}}>
                <div className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
                    <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a
                        href="../../getting-started/">getting started guide</a>.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;