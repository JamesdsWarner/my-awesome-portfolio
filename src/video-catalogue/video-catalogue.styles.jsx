import styled from "styled-components";
import ReactPlayer from "react-player/lazy";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.75)";

export const CarouselStyled = styled(Carousel)`
  margin-top: 40px;
  & .slide.selected {
    /* min-width: 150%; */
  }
`;

export const VideoCatalogueContainer = styled.div`
  margin-top: 30px;
`;

export const VideoArrayContainer = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const VideoWrapper = styled.div`
  margin: auto;
  width: auto; // Percentage ratio for 16:9
`;

export const VideoPlayer = styled(ReactPlayer)``;

export const ModalContainer = styled.div`
  border: none;
`;

export const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;

  width: 100%;

  @media screen and (min-width: 1500px) {
    width: 1500px;
  }
`;

export const ThumbnailWrapper = styled.span`
  filter: brightness(75%);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;

  & .react-thumbnail-generator {
    height: 366px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 1;

  & .fa-circle-play {
    color: #e5e5e5;
    font-size: 1.5em;
  }

  &:hover {
    filter: brightness(125%);
  }

  ${({ modalIsOpen }) => modalIsOpen && "display: none"};
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;

  & .fa-circle-play {
    filter: brightness(75%);
  }

  &:hover {
    & ${ThumbnailWrapper} {
      filter: brightness(50%);
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    & .fa-circle-play {
      filter: brightness(100%);
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      cursor: pointer;
    }
  }

  & .react-thumbnail-generator {
    & img {
      width: 650px;
      height: 366px;
    }
  }
`;
