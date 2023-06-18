import React from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Certification = ({ ...certification }) => {
  const navigate = useNavigate();
  const disableClick = window.matchMedia("(max-width: 600px)").matches;

  const handleClick = () => {
    if (!disableClick) {
      navigate("/certification/" + certification.id);
    }
  };

  return (
    <div className="certification" onClick={handleClick}>
      <LazyLoadImage
        src={certification.image_url}
        alt=""
        effect="blur"
        className="bgImage"
      />
    </div>
  );
};

export default Certification;
