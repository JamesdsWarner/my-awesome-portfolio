import * as Styled from "./swiper-slide-video.styles";
import { useState } from "react";

const SwiperSlideVideo = ({ source, isHovered, setIsHovered, videoFilename }) => {
  const [hovered, setHovered] = useState(false);

  const handleHoverEnter = () => {
    setHovered(true);
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setHovered(false);
    setIsHovered(false);
  };

  return (
    <>
      <Styled.SwiperSlideVideoThumbnail
        isHovered={isHovered}
        hovered={hovered}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        alt={`Video file: ${videoFilename} thumbnail`}
        loading="lazy"
        src={source}
      />
    </>
  );
};

export default SwiperSlideVideo;
