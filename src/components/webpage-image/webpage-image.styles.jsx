import styled from "styled-components";

export const WebpageImageWrapper = styled.div`
  width: 60%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease;
  transform: scale(${(props) => (props.isHovered ? (props.hovered ? 1.05 : 0.95) : 1)});
`;

export const WebpageImage = styled.img``;
