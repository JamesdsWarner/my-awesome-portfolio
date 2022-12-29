import styled from "styled-components";
import ReactPlayer from "react-player/lazy";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.75)";
Modal.defaultStyles.overlay.zIndex = 1000;

export const CarouselStyled = styled(Carousel)`
  margin-top: 40px;
  & .slide.selected {
  }
`;

export const VideoCatalogueContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  > * {
    &:first-child {
      > * {
        color: #fbfbff;
        font-weight: 800;
        text-shadow: 0.5px 0.5px 2px #000;
        margin-left: 11.5vw;
      }
    }
  }
`;

export const VideoArrayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  flex-wrap: wrap;

  > * {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const VideoCarouselContainer = styled.div`
  width: 77.1vw;
  margin-left: auto;
  margin-right: auto;
`;

export const VideoWrapper = styled.div`
  margin: auto;
  width: auto; // Percentage ratio for 16:9
`;

export const VideoPlayer = styled(ReactPlayer)``;

export const ModalContainer = styled.div`
  border: none;
  overlay: {
    zindex: 1000;
  }
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
  transition: all 0.3s ease;

  & .react-thumbnail-generator {
    height: 366px;
  }
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
      transition: all 0.3s ease;
      cursor: pointer;
    }

    & .fa-circle-play {
      filter: brightness(100%);
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
