import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPhotos} from '../actions/photos-action';
import {preloadPhotos, deletePhotos} from '../actions/preload-photo-action';
import {Button, Glyphicon} from 'react-bootstrap';

class FindPhotos extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { selectedRover, selectedCamera, selectedDate, dispatch } = this.props;
        return (
            <Button bsStyle="primary"
                onClick={() => {
                    dispatch(deletePhotos());
                    dispatch(fetchPhotos(selectedRover, selectedDate, selectedCamera))
                    .then(json => {
                        dispatch(preloadPhotos(json.photos, 0, 25))
                    })}}>
                <Glyphicon glyph="search" />
                Find Photos</Button>
        );
    }
}

const mapStateToProps = state => {

    const { selectedRover, selectedCamera, selectedDate } = state;

    return {
        selectedRover,
        selectedCamera,
        selectedDate
    }
};

export default connect(mapStateToProps)(FindPhotos);