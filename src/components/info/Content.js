import React from "react";

const Content = ({classList, handleShowInfo}) => {
  return (
    <div className={`content ${classList || ""}`}>
      <p>PlanToday is a very simple and minimal planner application.</p>
      <p>
        It allows you to plan what you are going to do on a present day and
        review what you had planned the previous day.
      </p>
      <p>
        This is not a journal or a progress tracker as it
        doesn’t save your todo's or progress. Use it to have a clear view of
        your day at hand and just focus on making the best out of it without
        worrying about any other things.
      </p>
      <p className="note">
        For best experience, use it on a phone and add it on your home screen
        for easy access.
      </p>
      <button className="btn btn-close" onClick={()=>handleShowInfo()} >[close]</button>
    </div>
  );
};

export default Content;
