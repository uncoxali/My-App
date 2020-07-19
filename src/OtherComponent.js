import React from "react";
import './other.css';
import img from './Image/Web.jpg';
import img3 from './Image/Web-3.jpg';
import img2 from './Image/Web-2.jpg';

function OtherComponent() {
    return (
        <>
            <div className="mt-3 text-center">
                <h6>BLOG</h6>
            </div>
            <hr/>
            <div className="card__collection clear-fix mt-5">
                <div className="cards cards--three ml-3">
                    <img
                        src={img}
                        className="img-responsive" alt=""/>
                    <span className="cards--three__rect-1">
      <span className="shadow-1"/>
      <p>web designer</p>
    </span>
                    <span className="cards--three__rect-2">
      <span className="shadow-2"></span>
    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fa fa-facebook-f"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-linkedin-in"></i></li>
                    </ul>
                </div><div className="cards cards--three ml-3">
                    <img
                        src={img2}
                        className="img-responsive" alt=""/>
                    <span className="cards--three__rect-1">
      <span className="shadow-1"/>
      <p>web designer</p>
    </span>
                    <span className="cards--three__rect-2">
      <span className="shadow-2"></span>
    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fa fa-facebook-f"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-linkedin-in"></i></li>
                    </ul>
                </div><div className="cards cards--three ml-3">
                    <img
                        src={img3}
                        className="img-responsive" alt=""/>
                    <span className="cards--three__rect-1">
      <span className="shadow-1"/>
      <p>web designer</p>
    </span>
                    <span className="cards--three__rect-2">
      <span className="shadow-2"></span>
    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><i className="fa fa-facebook-f"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-linkedin-in"></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default OtherComponent;
