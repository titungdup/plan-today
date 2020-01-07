import React from "react";

const DateStatus = ({data}) => {
    return (
        <div className="date-container">
            <h1 className="month">
                {data.date} {data.month},{" "}
                {data.year}
            </h1>
            <h2 className="day">{data.day}</h2>
        </div>
    );
};

export default DateStatus;
