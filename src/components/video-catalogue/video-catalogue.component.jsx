import * as Styled from "./video-catalogue.styles";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
const circleIcon = <FontAwesomeIcon icon={faCirclePlay} />;

const VideoCatalogue = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!modalIsOpen);

  const openModal = () => {
    toggleModal();
  };

  const VideoArray = [
    {
      filename:
        "https://dx501lltpgacl.cloudfront.net/Amazon+-+Sustainability+Challenge.mp4",
      id: 1,
    },
    {
      filename: "https://dx501lltpgacl.cloudfront.net/Amazon+X+Seenit.mp4",
      id: 2,
    },
    {
      filename:
        "https://dx501lltpgacl.cloudfront.net/H%26M+-+Community+Meet+Up.mp4",
      id: 3,
    },
    {
      filename:
        "https://dx501lltpgacl.cloudfront.net/Seenit+-+Employee+Spotlight+(CS+-+Roxane).mp4",
      id: 4,
    },
    {
      filename:
        "https://dx501lltpgacl.cloudfront.net/Sony+-+Customer+Showcase.mp4",
      id: 5,
    },
    {
      filename: "https://dx501lltpgacl.cloudfront.net/V2.mp4",
      id: 6,
    },
  ];

  return (
    <Styled.VideoCatalogueContainer>
      <h2>Here's what I've done...</h2>
      <Styled.CarouselStyled
        centerMode
        showArrows
        infiniteLoop
        showStatus={false}
        width="100%"
        height="30%"
      >
        {VideoArray.map((video) => {
          return (
            <Styled.ThumbnailContainer
              key={video.id}
              onClick={() => {
                openModal(video.filename);
              }}
            >
              <Styled.VideoPlayer
                className="react-player fixed-bottom"
                controls={true}
                url={video.filename}
                height="100%"
                width="100%"
              />
            </Styled.ThumbnailContainer>
          );
        })}
      </Styled.CarouselStyled>
    </Styled.VideoCatalogueContainer>
  );
};

export default VideoCatalogue;
