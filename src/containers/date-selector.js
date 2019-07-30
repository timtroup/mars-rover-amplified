import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectDate} from '../actions/select-date-action';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export class DateSelector extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        const {dispatch} = this.props;
        dispatch(selectDate(moment(date.toString()).format('YYYY-MM-DD')));
    }

    render() {

        return (
            <DatePicker
                dateFormat="DD/MM/YYYY"
                onChange={this.handleChange}
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown/>
        );

    }
}

const mapStateToProps = state => {
    const {selectedDate, selectedRover, manifestByRover} = state;

    return {
        selectedDate: moment(selectedDate),
        selectedRover,
        manifestByRover
    }
};

export default connect(mapStateToProps)(DateSelector);