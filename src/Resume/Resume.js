import React, { Component } from "react";
import image from "../Image/imgByAli.jpg";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  Flip,
  Zoom,
  Slide,
} from "react-awesome-reveal";
class Resume extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 bg-style">
          <div className="row d-flex justify-content-between">
            <Slide className="col-md-3" style={{ borderRadius: 10 }}>
              <h5
                style={{ fontSize: 14, fontWeight: "bold" }}
                className="text-center mt-3"
              >
                PROFESSIONAL DETAILS
              </h5>
              <div className="mt-3">
                <img
                  className="img col-sm-6 col-md-12 rounded-circle"
                  src={image}
                  alt=""
                />
              </div>
              <div className="d-flex justify-content-between mt-4">
                <h6 style={{ fontSize: 14, fontWeight: "bold" }}>NAME</h6>
                <p style={{ fontSize: 14, color: "#7B7D7D" }}>Ali Mohammadi</p>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <h6 style={{ fontSize: 14, fontWeight: "bold" }}>AGE</h6>
                <p style={{ fontSize: 14, color: "#7B7D7D" }}>25 YEARS</p>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <h6 style={{ fontSize: 14, fontWeight: "bold" }}>LOCATION</h6>
                <p style={{ fontSize: 14, color: "#7B7D7D" }}>
                  ZANJAN, SOHREVARD
                </p>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <h6 style={{ fontSize: 14, fontWeight: "bold" }}>PHONE</h6>
                <p style={{ fontSize: 14, color: "#7B7D7D" }}>09104866595</p>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <h6 style={{ fontSize: 14, fontWeight: "bold" }}>E-MAILE</h6>
                <p style={{ fontSize: 14, color: "#7B7D7D" }}>
                  Alif.mohamady20@gmail.com
                </p>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <h6 style={{ fontSize: 14, fontWeight: "bold" }}>WEBSAITE</h6>
                <p style={{ fontSize: 14, color: "#7B7D7D" }}>*************</p>
              </div>
              <hr className="mt-5" />
              <div>
                <h6 style={{ fontSize: 14, fontWeight: "bold" }}>
                  SOCIAL PROFILES
                </h6>
              </div>
              <hr />
              <div className="d-flex justify-content-around mt-4">
                <Link to="#@uncoali">
                  <span
                    className="fa fa-telegram"
                    style={{ fontSize: 30, color: "silver" }}
                  />
                </Link>
                <Link to="#aliuncox">
                  <span
                    className="fa fa-instagram"
                    style={{ fontSize: 35, color: "silver" }}
                  />
                </Link>
                <Link to="#aliuncox1373">
                  <span
                    className="fa fa-twitter"
                    style={{ fontSize: 35, color: "silver" }}
                  />
                </Link>
                <Link to="#Alimohamadi">
                  <span
                    className="fa fa-linkedin"
                    style={{ fontSize: 35, color: "silver" }}
                  />
                </Link>
              </div>
              <hr />
            </Slide>
            <div className="col-sm-6 col-md-8 mt-5">
              <h6 style={{ fontSize: 14, fontWeight: "bold" }}>BIO & SKILLS</h6>
              <hr />
              <Flip>
                <p style={{ fontSize: 14, color: "#7B7D7D" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras
                  vel lorem. Etiam pellentesque aliquet tellus. Phasellus
                  pharetra nulla ac diam. Quisque semper justo at risus. Donec
                  venenatis, turpis vel hendrerit interdum, dui ligula ultricies
                  purus, sed posuere libero dui id orci. Nam congue, pede vitae
                  dapibus aliquet, elit magna vulputate arcu, vel tempus metus
                  leo non est. Etiam sit amet lectus quis est congue mollis.
                  Phasellus congue lacus eget neque. Phasellus ornare, ante
                  vitae consectetuer consequat, purus sapien ultricies dolor, et
                  mollis pede metus eget nisi. Praesent sodales velit quis
                  augue. Cras suscipit, urna at aliquam rhoncus, urna quam
                  viverra nisi, in interdum massa nibh nec erat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Proin nibh augue,
                  suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.
                  Etiam pellentesque aliquet tellus.
                </p>
              </Flip>
              <hr className="mt-5" />
              <Zoom>
                <h6 className="mt-3">HTML-5</h6>
                <ProgressBar animated now={100} />
                <h6 className="mt-3">CSS-3</h6>

                <ProgressBar animated now={98} />
                <h6 className="mt-3">BOOTSTRAP-4</h6>
                <ProgressBar animated now={95} />
                <h6 className="mt-3">JAVASCRIPT-ECMA 6</h6>
                <ProgressBar animated now={75} />
                <h6 className="mt-3">REACT-JS</h6>
                <ProgressBar animated now={69} />
                <h6 className="mt-3">HOOK</h6>
                <ProgressBar animated now={60} />
                <h6 className="mt-3">REDUX</h6>
                <ProgressBar animated now={50} />
                <h6 className="mt-3">GIT</h6>
                <ProgressBar animated now={95} />
                <h6 className="mt-3">GITHUB</h6>
                <ProgressBar animated now={95} />
              </Zoom>
              <hr />
            </div>
            <hr />
          </div>
        </div>
      </>
    );
  }
}

export default Resume;
