import { useState } from "react";

import * as Styled from "./webpage-image.styles";

const WebpageImage = ({ filename, isHovered, setIsHovered }) => {
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
    <Styled.WebpageImageWrapper
      isHovered={isHovered}
      hovered={hovered}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <Styled.WebpageImage src={filename} />
    </Styled.WebpageImageWrapper>
  );
};

export default WebpageImage;