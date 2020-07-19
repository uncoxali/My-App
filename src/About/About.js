import React from "react";
import './about.css';
import {Link} from "react-router-dom";
import image from '../Image/imgByAli.jpg';
import FormContact from "../Form/FormContact";
import '../App.css';
import OtherComponent from "../OtherComponent";

function About() {
    return (
        <>
            <div className="container bg-style mt-5">
                <div className="row justify-content-between">
                    <div className="col-md-3" style={{borderRadius: 10}}>
                        <h5 style={{fontSize: 14, fontWeight: "bold"}} className="text-center mt-3">PROFESSIONAL
                            DETAILS</h5>
                        <div className="mt-3">
                            <img className="img col-sm-6 col-md-12 rounded-circle" src={image} alt=""/>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <h6 style={{fontSize: 14, fontWeight: "bold"}}>NAME</h6>
                            <p style={{fontSize: 14, color: "#7B7D7D"}}>Ali Mohammadi</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h6 style={{fontSize: 14, fontWeight: "bold"}}>AGE</h6>
                            <p style={{fontSize: 14, color: "#7B7D7D"}}>25 YEARS</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h6 style={{fontSize: 14, fontWeight: "bold"}}>LOCATION</h6>
                            <p style={{fontSize: 14, color: "#7B7D7D"}}>ZANJAN, SOHREVARD</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h6 style={{fontSize: 14, fontWeight: "bold"}}>PHONE</h6>
                            <p style={{fontSize: 14, color: "#7B7D7D"}}>09104866595</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h6 style={{fontSize: 14, fontWeight: "bold"}}>E-MAILE</h6>
                            <p style={{fontSize: 14, color: "#7B7D7D"}}>Alif.mohamady20@gmail.com</p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <h6 style={{fontSize: 14, fontWeight: "bold"}}>WEBSAITE</h6>
                            <p style={{fontSize: 14, color: "#7B7D7D"}}>*************</p>
                        </div>
                        <hr className="mt-5"/>
                        <div>
                            <h6 style={{fontSize: 14, fontWeight: "bold"}}>SOCIAL PROFILES</h6>
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-around mt-4">
                            <Link to="#@uncoali"><span className="fa fa-telegram"
                                                       style={{fontSize: 30, color: 'silver'}}/></Link>
                            <Link to="#aliuncox"><span className="fa fa-instagram"
                                                       style={{fontSize: 35, color: 'silver'}}/></Link>
                            <Link to="#aliuncox1373"><span className="fa fa-twitter"
                                                           style={{fontSize: 35, color: 'silver'}}/></Link>
                            <Link to="#Alimohamadi"><span className="fa fa-linkedin"
                                                          style={{fontSize: 35, color: 'silver'}}/></Link>
                        </div>
                        <hr/>
                        <div>
                            <FormContact/>
                        </div>
                    </div>
                    {/*

                    */}
                    <div className="col col-md-9 d-inline" style={{borderRadius: 10}}>
                        <h6 style={{fontSize: 14, fontWeight: "bold"}} className="text-center mt-3">ABOUT ME</h6>
                        <hr/>
                        <div className="row p-3">
                            <div className="col-xs-12 col-sm-6 col-md-6 d-block">
                                <div className="d-flex justify-content-between mt-3">
                                    <h6 style={{fontSize: 14, fontWeight: "bold"}}>NAME</h6>
                                    <span style={{fontSize: 14, color: "#7B7D7D"}}>Ali Mohamdi</span>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <h6 style={{fontSize: 14, fontWeight: "bold"}}>LOCATION</h6>
                                    <span style={{fontSize: 14, color: "#7B7D7D"}}>Iran,Zanjan</span>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <h6 style={{fontSize: 14, fontWeight: "bold"}}>PHONE</h6>
                                    <span style={{fontSize: 14, color: "#7B7D7D"}}>+989104866595</span>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <h6 style={{fontSize: 14, fontWeight: "bold"}}>E-MAIL</h6>
                                    <Link style={{fontSize: 14, color: "#7B7D7D"}}
                                          to="#">alif.mohamdy20@gmail.com</Link>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="d-flex justify-content-between mt-3">
                                    <h6 style={{fontSize: 14, fontWeight: "bold"}}>Age</h6>
                                    <span style={{fontSize: 14, color: "#7B7D7D"}}>25 Years</span>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <h6 style={{fontSize: 14, fontWeight: "bold"}}>EXPERIENCE</h6>
                                    <span style={{fontSize: 14, color: "#7B7D7D"}}>1 Years</span>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <h6 style={{fontSize: 14, fontWeight: "bold"}}>FAX</h6>
                                    <span style={{fontSize: 14, color: "#7B7D7D"}}>02434352****</span>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <h6 style={{fontSize: 14, fontWeight: "bold"}}>WEBSAITE</h6>
                                    <span style={{fontSize: 14, color: "#7B7D7D"}}>********</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h6 style={{fontSize: 14, fontWeight: "bold"}}>I’M WEB DESIGNER</h6>
                        </div>
                        <hr/>
                        <div>
                            <p style={{fontSize: 14, color: "#7B7D7D"}}>
                                Interested in designing a website with the new JavaScript React adn React Native
                                framework
                            </p>
                        </div>
                        <hr className="mt-5"/>
                        {/*  */}
                        <div>
                            <div className="row padding-20 margin-top-50">
                                <div className="col-md-4 text-center">
                                    <div className="icon-box i-large ib-black">
                                        <div className="ib-icon"><i className="fa fa-whatsapp"
                                                                    style={{color: "blue", fontSize: 60}}/></div>
                                        <div className="ib-info mt-2">
                                            <h4 className="h6">WEB DEVELOPMENT</h4>
                                            <p style={{fontSize: 14, color: "#7B7D7D"}}>We have created the new macbook
                                                psd version with scalable vector
                                                shapes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="icon-box i-large ib-black">
                                        <div className="ib-icon"><i className="fa fa-magic"
                                                                    style={{color: "blueviolet", fontSize: 60}}/></div>
                                        <div className="ib-info">
                                            <h4 className="h6">WEB DESIGN</h4>
                                            <p style={{fontSize: 14, color: "#7B7D7D"}}>We have created the new macbook
                                                psd version with scalable vector
                                                shapes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="icon-box i-large ib-black">
                                        <div className="ib-icon"><i className="fa fa-smile-o"
                                                                    style={{color: "brown", fontSize: 60}}/></div>
                                        <div className="ib-info">
                                            <h4 className="h6">RESPONSIVE</h4>
                                            <p style={{fontSize: 14, color: "#7B7D7D"}}>We have created the new macbook
                                                psd version with scalable vector
                                                shapes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*    */}
                        <div>
                            <div className="row padding-20 margin-top-50">
                                <div className="col-md-4 text-center">
                                    <div className="icon-box i-large ib-black">
                                        <div className="ib-icon"><i className="fa fa-diamond"
                                                                    style={{color: "blueviolet", fontSize: 60}}/></div>
                                        <div className="ib-info">
                                            <h4 className="h6">UNIQUE DESIGN</h4>
                                            <p style={{fontSize: 14, color: "#7B7D7D"}}>We have created the new macbook
                                                psd version with scalable vector shapes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="icon-box i-large ib-black">
                                        <div className="ib-icon"><i className="fa fa-server"
                                                                    style={{color: "cadetblue", fontSize: 60}}/></div>
                                        <div className="ib-info">
                                            <h4 className="h6">DEMOS LAYOUT</h4>
                                            <p style={{fontSize: 14, color: "#7B7D7D"}}>We have created the new macbook
                                                psd version with scalable vector shapes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="icon-box i-large ib-black">
                                        <div className="ib-icon"><i className="fa fa-scissors"
                                                                    style={{color: "darksalmon", fontSize: 60}}/></div>
                                        <div className="ib-info">
                                            <h4 className="h6">CLEAN CODE</h4>
                                            <p style={{fontSize: 14, color: "#7B7D7D"}}>We have created the new macbook
                                                psd version with scalable vector
                                                shapes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About;
