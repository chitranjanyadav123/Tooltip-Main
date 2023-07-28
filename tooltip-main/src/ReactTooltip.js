import { useState } from "react";
import "./ReactTooltip.css";
function ReactTooltip(props){
  //useState hook for active variable
  const [active, setActive] = useState(false);
  // Function for showTooltip
  function showTooltip() {
    setActive(true);
  }
  // Function for hideTooltip
  function hideTooltip() {
    setActive(false);
  }
  return (
    <div
      className="Wrapper"
      //Events for the tooltip
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {/* props.children gives the button which is written in app.js component and we get it from props */}
      {props.children}
      {/* When we mouseover then active will set to true and due to which the tooltip will show and when we 
        remove our mouseover then active will set to false due to which the tooltip will hide */}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {props.content}
        </div>
      )}
    </div>
  );
}
export default ReactTooltip;