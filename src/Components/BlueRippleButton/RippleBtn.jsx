import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./RippleBtn.css";
const RippleBtn = ({ children, onClick }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isReppling, setIsReppling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsReppling(true);
      setTimeout(() => setIsReppling(false), 500);
    } else {
      setIsReppling(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isReppling) setCoords({ x: -1, y: -1 });
  }, [isReppling]);

  return (
    <button
      className="ripple-btn"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
    >
      {isReppling ? (
        <span className="ripple" style={{ left: coords.x, top: coords.y }} />
      ) : (
        ""
      )}
      <span className="content">{children}</span>
    </button>
  );
};

RippleBtn.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default RippleBtn;
