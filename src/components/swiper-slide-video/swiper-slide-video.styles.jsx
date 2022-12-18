import styled from "styled-components";

export const SwiperSlideVideoWrapper = styled.div``;

export const SwiperSlideVideoThumbnail = styled.img`
  transition: all 0.2s ease-out;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  transform: scale(${(props) => (props.isHovered ? (props.hovered ? 1.05 : 0.95) : 1)});
`;

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  pointer-events: none;
  display: none;

  & .fa-circle-play {
    color: #e5e5e5;
    font-size: 1.5em;
    &:hover {
      filter: brightness(125%);
    }
  }

  ${({ modalIsOpen }) => modalIsOpen && "display: none"};
`;
