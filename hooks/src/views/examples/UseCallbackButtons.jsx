import React from "react";

const UseCallbackButtons = (props) => {
  console.log("render..... ");

  return (
   <div>
    <button className="btn" onClick={() => props.inc(6)}>
        6
    </button>
    <button className="btn" onClick={() => props.inc(8)}>
        8
    </button>
    <button className="btn" onClick={() => props.inc(12)}>
        12
    </button>
   </div>
  );
};

//export default UseCallbackButtons;
export default React.memo(UseCallbackButtons);
