import React from 'react';

/**
 * Formats a date in context. E.g. if the date is during today,
 * the date will be dropped and only the time showed. If the date
 * is during this week, the weekday and time will be used with no
 * full date.
 * @param {date} date - The JS Date object to format with context 
 */
const SmartDate = (props) => {
    const today = new Date();
    const {date} = props;
    const dateObj = new Date(date);
    if (
        dateObj.getYear() === today.getYear()
        && dateObj.getMonth() === today.getMonth()
        && dateObj.getDay() === today.getDay()
    ) { // date is today
        return <span>{dateObj.toLocaleTimeString()}</span>
    } else {
        // TODO: Make it so it changes the date string in context
        // of it being less than a week old. This might help:
        // https://stackoverflow.com/questions/30668373/moment-js-test-if-a-date-is-today-yesterday-within-a-week-or-two-weeks-ago
        return <span>{dateObj.toDateString()}</span>
    }
}

export default SmartDate;