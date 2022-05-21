import React, {Fragment, useMemo} from "react"
import './Planner.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import 'moment-timezone'
import PropTypes from 'prop-types'
import {Calendar, Views, DateLocalizer, momentLocalizer} from 'react-big-calendar'


moment.tz.setDefault('America/Los_Angeles');
const mLocalizer = momentLocalizer(moment);

const ColoredDateCellWrapper = ({children}) => 
        React.cloneElement(React.Children.only(children), {
            style: {
                backgroundColor: 'lightblue',
            },
        })

function Planner({
    localizer = mLocalizer,
    ...props
}){
    

    function getTodos(){
        const todos = [
            {
                title: "Buy 2% milk",
                category: null,
                // start: new Date(2022, 5, 13, 0, 0, 0),
                // end: new Date(2016, 5, 20, 0, 0, 0),
                start: moment('2022/05/03').toDate(),
                end: moment('2022/05/03').toDate(),
                complete: false
            },
            {
                title: "Finish sprint 1 [csc307]",
                category: "School",
                start: moment('2022/05/11').toDate(),
                end: moment('2022/05/12').toDate(),
                complete: false
            },
            {
                title: "Buy salad",
                category: "Groceries",
                start: moment('2022/05/03 11:30').toDate(),
                end: moment('2022/05/03 12:45').toDate(),
                complete: false
            },
            {
                title: "Surf at Pismo",
                category: "Workout",
                start: moment('2022/05/07').toDate(),
                end:moment('2022/05/08').toDate(),
                complete: false
            },
        ];

        return todos;
    }
    const todos = getTodos();

    const {components, views} = useMemo(
        () => ({
            components: {
                timeSlotWrapper: ColoredDateCellWrapper,
            },
            views: Object.keys(Views).map((k) => Views[k]),
        }),
        []
    )


    

    return (
        <div className="planner">
            <Fragment>
                <div className="height600" {...props}>
                    <Calendar
                        components={components}
                        events={todos}
                        localizer={localizer}
                        showMultiDayTimes
                        step={60}
                        views={views}
                    />
                </div>
            </Fragment>
        </div>
    );

}
Planner.propTypes = {
    localizer: PropTypes.instanceOf(DateLocalizer),
}

export default Planner;