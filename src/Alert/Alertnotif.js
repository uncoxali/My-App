import React, {Component} from 'react';
import {Router} from 'react-router';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Alertnotif extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>
                    {this.props.children}
                </span>
                <Alert stack={{limit: 3}}/>
            </div>
        );
    }
}

export default Alertnotif;