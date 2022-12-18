import * as Styled from "./swiper-slide-video.styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const circleIcon = <FontAwesomeIcon icon={faCirclePlay} />;

const SwiperSlideVideo = ({ video, isHovered, setIsHovered }) => {
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
      <Styled.IconWrapper className="icon">{circleIcon}</Styled.IconWrapper>
      <Styled.SwiperSlideVideoThumbnail
        isHovered={isHovered}
        hovered={hovered}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        src={video.thumbnail}
      />
    </>
  );
};

export default SwiperSlideVideo;
