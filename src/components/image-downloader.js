import React from 'react';
import PropTypes from 'prop-types';

const ImageDownloader = ({ imgSrc }) => (
    <a className="pull-right" href={imgSrc} download="fluffy.jpeg">
        Download
        <i className="glyphicon glyphicon-download-alt" aria-hidden="true"></i>
    </a>
);

ImageDownloader.propTypes = {
    imgSrc: PropTypes.string.isRequired
};

export default ImageDownloader