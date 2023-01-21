import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop2.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <div className="desktop-2">
      <div className="indicator-assessment">Indicator Assessment</div>
      <div className="felt-anxious-worried">
        Felt anxious, worried, or nervous about social situations.
      </div>
      <div className="desktop-2-child" />
      <div className="desktop-2-item" />
      <div className="desktop-2-inner" />
      <div className="rectangle-div" />
      <div className="desktop-2-child1" />
      <div className="never">Never</div>
      <div className="occasionally">Occasionally</div>
      <div className="half-of-the">Half of the time</div>
      <div className="most-of-the">Most of the time</div>
      <div className="all-of-the">All of the time</div>
      <button className="rectangle-button" onClick={onRectangleButtonClick} />
      <button className="desktop-2-child2" />
      <div className="next">Next</div>
      <div className="previous">Previous</div>
      {/* <img className="ellipse-icon" alt="" src="../ellipse-1.svg" /> */}
      <div className="div">2</div>
    </div>
  );
};

export default Desktop2;