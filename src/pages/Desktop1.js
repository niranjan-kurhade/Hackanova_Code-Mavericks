import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop1.css";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onRectangleButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-1">
      <div className="indicator-assessment1">Indicator Assessment</div>
      <div className="felt-moments-of">
        Felt moments of sudden terror, fear, or fright in social situations.
      </div>
      <div className="desktop-1-child" />
      <div className="desktop-1-item" />
      <div className="desktop-1-inner" />
      <div className="desktop-1-child1" />
      <div className="desktop-1-child2" />
      <div className="never1">Never</div>
      <div className="occasionally1">Occasionally</div>
      <div className="half-of-the1">Half of the time</div>
      <div className="most-of-the1">Most of the time</div>
      <div className="all-of-the1">All of the time</div>
      <button className="desktop-1-child3" />
      <button className="desktop-1-child4" onClick={onRectangleButton1Click} />
      <div className="next1">Next</div>
      <div className="previous1">Previous</div>
      <img className="desktop-1-child5" alt="" src="../ellipse-1.svg" />
      <div className="div1">1</div>
    </div>
  );
};

export default Desktop1;