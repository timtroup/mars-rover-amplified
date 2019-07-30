import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RoverList from '../containers/rover-list';
import CameraList from '../containers/camera-list';
import DateSelector from '../containers/date-selector';
import FindPhotos from '../containers/find-photos';
import {Grid, Row, Col, Popover, OverlayTrigger, Button, Glyphicon, Panel} from 'react-bootstrap';
import {AutoAffix} from 'react-overlays';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

class App extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    render() {
        return (
            <Grid>
                <Row>
                    <h1 className="text-center">Mars Rover Photo Viewer</h1>
                    <hr/>
                </Row>
                <Row>
                    <AutoAffix viewportOffsetTop={15} container={this}>
                        <Panel>
                            <Col md="2">
                                <RoverList/>
                            </Col>
                            <Col md="2">
                                <DateSelector />
                            </Col>
                            <Col md="5">
                                <CameraList />
                            </Col>
                            <Col md="2">
                                <FindPhotos />
                            </Col>
                        </Panel>
                    </AutoAffix>
                </Row>
            </Grid>
        );
    }
}

export default connect()(App);
