import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './navbar.css';
import Animationtext from "../Animation/Animationtext";


function Navbars() {
    return (
        <>
            <div className="container bg-style">
                <Navbar bg="white" expand="lg">
                    <Link to="/home" style={{textDecoration: 'none'}}
                          className="text-danger"><span className="fa fa-home mr-2"/>HOME
                    </Link> <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="ml-5"/>
                        <Nav className="d-flex">
                            <div className="nav-style p-3">
                                <Link to="/about" style={{textDecoration: 'none'}}
                                      className="p-4 link-style link-style1"><span className="fa fa-user-o mr-3"/>ABOUTE
                                    ME</Link>
                            </div>
                            <div className="nav-style p-3">
                                <Link to="/resume" style={{textDecoration: 'none'}}
                                      className="p-4 link-style link-style1"><span
                                    className="fa fa-file-text-o mr-3"/>RESUME</Link>
                            </div>
                            <div className=" nav-style p-3">
                                <Link to="/blog" style={{textDecoration: 'none'}}
                                      className="p-4 link-style link-style1"><span
                                    className="fa fa-pencil-square-o mr-3"/>BLOG</Link>
                            </div>
                            <div className=" nav-style p-3">
                                <Link to="/contact" style={{textDecoration: 'none'}}
                                      className="p-4 link-style link-style1"><span className="fa fa-pencil mr-3"/>CONTACT
                                    ME</Link>
                            </div>
                            <div className=" nav-style p-3">
                                <Animationtext/>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Navbars;