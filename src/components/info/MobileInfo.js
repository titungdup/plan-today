import React from "react";
import Logo from "./Logo";

const MobileInfo = ({handleShowInfo}) => {
  return (
    <div className="mobile-info">
      <Logo />
      <div className="mobile-actions">
          {/* <button className="btn">Help</button> */}
          <button className="btn" onClick={()=>handleShowInfo()} >About</button>
      </div>
    </div>
  );
};

export default MobileInfo;
