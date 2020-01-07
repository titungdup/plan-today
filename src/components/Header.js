import React, { useState, useEffect } from "react";
import DateStatus from "./DateFormat";

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const Header = ({ date, onChange }) => {
    const [formattedDate, setFormattedDate] = useState({});

    const [isToday, setIsToday] = useState(true);

    useEffect(() => {
        const today = new Date();
        setIsToday(
            date.getFullYear() === today.getFullYear() &&
                date.getMonth() === today.getMonth() &&
                date.getDate() === today.getDate()
		);
		
		setFormattedDate({
			year: date.getFullYear(),
			month: months[date.getMonth()],
			day: weekdays[date.getDay()],
			date: date.getDate()
		})
	}, [date]);

    const changeDate = () => {
        const date = new Date();
        if (!isToday) {
            return date;
        }

        date.setDate(date.getDate() - 1);
        return date;
    };
    return (
        <div className="header">
            <DateStatus data={formattedDate} />
            <button
                className="prev-day btn"
                onClick={() => onChange(changeDate())}
            >
                {isToday ? "Previous Day" : "Today"}
            </button>
        </div>
    );
};

export default Header;
