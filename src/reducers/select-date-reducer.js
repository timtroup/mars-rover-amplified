import { SELECT_DATE } from '../actions/select-date-action';
import moment from 'moment';

const selectedDate = (state = moment().subtract(2, "days").format('YYYY-MM-DD'), action) => {
    switch (action.type) {
        case SELECT_DATE:
            return action.date;
        default:
            return state
    }
};

export default selectedDate