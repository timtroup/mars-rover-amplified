import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectCamera} from '../actions/select-camera-action';
import CameraPicker from '../components/camera-picker';

class CameraList extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(camera) {
        const { dispatch } = this.props;
        dispatch(selectCamera(camera));
    }

    render() {
        const { rovers, selectedRover, selectedCamera } = this.props;

        let cameras = [];

        if(rovers.rovers.length && selectedRover) {
            cameras = getCamerasForRover(rovers.rovers, selectedRover)[0].cameras;
        }

        return (
            <CameraPicker
                value={selectedCamera}
                onChange={this.handleChange}
                options={cameras}
            />
        );
    }
}

function getCamerasForRover(rovers, selectedRover) {
    return rovers.filter(rover => {
        return rover.name === selectedRover;
    });
}

const mapStateToProps = state => {
    const { rovers, selectedRover, selectedCamera } = state;

    return {
        rovers, selectedRover, selectedCamera
    }
};

export default connect(mapStateToProps)(CameraList);