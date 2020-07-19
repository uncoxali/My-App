import React, {Component} from 'react';
import image from "../Image/imgByAli.jpg";
import {Link} from "react-router-dom";
import FormComment from "../Form/FormContact";


class Contact extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {

        return (
            <>
                <div className="container mt-5 bg-style">
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
                        </div>
                        <div className="col-sm-6 col-md-8 mt-5 container">
                            <h6 style={{fontSize: 14, fontWeight: "bold"}}>CONATCT ME</h6>
                            <hr/>
                            <div className="row justify-content-between mt-5">
                                <div className="">
                                    <span className="fa fa-mobile-phone ml-5" style={{fontSize: 50}}/>
                                    <h6 className="mt-3 mr-5">+989104866595</h6>
                                    <h6 className="mt-3 mr-5">+989104866595</h6>
                                </div>
                                <div>
                                    <span className="fa fa-map-marker ml-5" style={{fontSize: 50}}/>
                                    <p className="mr-5 mt-3">My Location</p>
                                    <p className="mr-5"> Zanjan/Sohrevard</p>
                                </div>
                                <div>
                                    <span className="fa fa-envelope ml-5" style={{fontSize: 40}}/>
                                    <p className="mr-5 mt-3">hrithik13.am@gmail.com</p>
                                </div>
                                <div>
                                    <FormComment/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;