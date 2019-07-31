import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {preloadPhotos} from '../actions/preload-photo-action';
import {Button, Glyphicon} from 'react-bootstrap';

class LoadMoreResults extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { roverPhotos, photos, dispatch } = this.props;

        if(roverPhotos.length > photos.length) {
            return (
                <Button bsStyle="primary"
                        onClick={() => dispatch(preloadPhotos(roverPhotos, photos.length, photos.length+25))}>
                    <Glyphicon glyph="plus" />
                    Show more results...</Button>
            );

        } else {
            return (
                <div></div>
            )
        }
    }
}

const mapStateToProps = state => {

    return {
        roverPhotos: state.photos.photos,
        photos: state.photoGalleryData.data,
    }
};

export default connect(mapStateToProps)(LoadMoreResults);