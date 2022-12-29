import { useState } from "react";

import * as Styled from "./webpage-image.styles";

const WebpageImage = ({ source, isHovered, setIsHovered, text, filename }) => {
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
      <Styled.WebpageLinkText>{text}</Styled.WebpageLinkText>
      <Styled.WebpageImage alt={`${filename} image`} src={source} loading="lazy" />
    </Styled.WebpageImageWrapper>
  );
};

export default WebpageImage;
