import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RoverPicker from '../components/rover-picker';
import {fetchRovers} from "../actions/rovers-action";
import {selectRover} from '../actions/select-rover-action';

class RoverList extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        const {dispatch} = this.props;
        dispatch(fetchRovers());
    }

    handleChange(rover) {
        const { dispatch } = this.props;
        dispatch(selectRover(rover));
    }

    render() {
        const { rovers } = this.props;
        if (rovers.rovers.length) {
            return (
                <RoverPicker
                    onChange={this.handleChange}
                    options={rovers.rovers}
                />
            );
        } else {
            return (
                <div><h2>No rovers to display</h2></div>
            )
        }
    }
}

const mapStateToProps = state => {

    const { rovers } = state;

    return {
        rovers
    }
};

export default connect(mapStateToProps)(RoverList);