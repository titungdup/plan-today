import React, { useState, useEffect } from "react";
import Header from "./Header";
import TextBox from "./TextBox";
import { logo } from "./../assets/images"

const checkIfToday = date => {
    const today = new Date();

    return (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
    );
};
const App = () => {
    const [plans, setPlans] = useState({});
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const plans = JSON.parse(localStorage.getItem("plans"));
        setPlans(plans || {});
    }, []);

    const saveDate = date => {
        setDate(date);
    };

    const getPlan = date => {
        const planId = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;

        const planTemplate = {
            id: planId,
            date: date,
            content: "",
            editable: checkIfToday(date)
        };

        return { ...planTemplate, ...plans[planId] };
    };

    const savePlans = plan => {
        delete plan.editable
        const updatedPlans = { ...plans, [plan.id]: plan }
        setPlans(updatedPlans);
        localStorage.setItem("plans", JSON.stringify(updatedPlans));
    };

    return (
        <>
            <div className="info">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="content">
                    <p>PlanToday is a very simple and minimal planner application.</p>
                    <p>It allows you to plan what you are going to do on a present day and review what you had planned the previous day.</p>
                      <p>  This is not a journal or a progress tracker or tracker of any sort as it doesn’t save your any info or progress.
                        Use it to have a clear view of you day at hand and just focus on making the best out of it without worrying about any other things.
                        </p>
                        <p>
                        If you are using it on a phone, add it on you home screen to have an easy access.
                    </p>
                </div>
            </div>
            <div className="app-container">
                <Header date={date} onChange={saveDate} />
                <TextBox plan={getPlan(date)} onChange={savePlans} />
            </div>
        </>
    );
};

export default App;
