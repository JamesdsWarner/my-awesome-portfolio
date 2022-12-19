import styled from "styled-components";

export const WebpageLinkText = styled.h4`
  position: absolute;
  font-size: 20px;
  left: 0;
  right: 0;
  margin: auto;
  width: 500px;
  height: 40px;
  top: 0;
  bottom: 0;
  color: white;
  z-index: 999;
  transition: all 300ms ease 0s;
  opacity: 0;
  pointer-events: none;
  color: white;

  @media screen and (max-width: 1081px) {
    font-size: 10px;
    height: 10px;
    width: 200px;
  }
`;

export const WebpageImageWrapper = styled.div`
  width: 60%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease;
  transform: scale(${(props) => (props.isHovered ? (props.hovered ? 1.05 : 0.95) : 1)});
  &:hover ${WebpageLinkText} {
    opacity: 1;
    filter: brightness(1.7);
  }
`;

export const WebpageImage = styled.img`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(0.5);
  }
`;
