import { useState } from "react";
import PropTypes from "prop-types";

const BtnLearnMore = ({ color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <a
        className={`btnLearnMore ${isHovered ? "hovered" : ""}`}
        href="#"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        LEARN MORE
        <span
          className="after"
          style={{ backgroundColor: color || "yellow" }}
        ></span>
      </a>
    </>
  );
};
BtnLearnMore.propTypes = {
  color: PropTypes.string,
  
};

export { BtnLearnMore };
