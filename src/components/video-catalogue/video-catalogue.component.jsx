import * as Styled from "./video-catalogue.styles";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.styles.scss";
const circleIcon = <FontAwesomeIcon icon={faCirclePlay} />;

const VideoCatalogue = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);

  const toggleModal = () => setIsOpen(!modalIsOpen);

  const openModal = (video) => {
    setModalVideo(video);
    toggleModal();
  };

  const closeModal = () => {
    toggleModal();
  };

  const VideoArray = [
    {
      video: "https://dx501lltpgacl.cloudfront.net/videos/Amazon+-+Sustainability+Challenge.mp4",
      thumbnail: "https://dx501lltpgacl.cloudfront.net/thumbnails/AmazonSustainabilityChallenge.mp4.png",
      id: 1,
    },
    {
      video: "https://dx501lltpgacl.cloudfront.net/videos/Amazon+X+Seenit.mp4",
      thumbnail: "https://dx501lltpgacl.cloudfront.net/thumbnails/AmazonXSeenit.mp4.png",
      id: 2,
    },
    {
      video: "https://dx501lltpgacl.cloudfront.net/videos/HandM+-+Community+Meet+Up.mp4",
      thumbnail: "https://dx501lltpgacl.cloudfront.net/thumbnails/HandMCommunityMeetUp.mp4.png",
      id: 3,
    },
    {
      video: "https://dx501lltpgacl.cloudfront.net/videos/Seenit+-+Employee+Spotlight+(CS+-+Roxane).mp4",
      thumbnail: "https://dx501lltpgacl.cloudfront.net/thumbnails/SeenitEmployeeSpotlight(CSRoxane).mp4.png",
      id: 4,
    },
    {
      video: "https://dx501lltpgacl.cloudfront.net/videos/Sony+-+Customer+Showcase.mp4",
      thumbnail: "https://dx501lltpgacl.cloudfront.net/thumbnails/SonyCustomerShowcase.mp4.png",
      id: 5,
    },
    {
      video: "https://dx501lltpgacl.cloudfront.net/videos/V2.mp4",
      thumbnail: "https://dx501lltpgacl.cloudfront.net/thumbnails/V2.mp4.png",
      id: 6,
    },
  ];

  return (
    <Styled.VideoCatalogueContainer>
      <h2>Here's what I've done...</h2>
      <Styled.VideoArrayContainer>
        <Swiper
          slidesPerView={3}
          spaceBetween={6}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          simulateTouch={false}
          shortSwiper={false}
        >
          {VideoArray.map((video) => {
            return (
              <SwiperSlide onClick={() => openModal(video.video)}>
                <Styled.IconWrapper className="icon">{circleIcon}</Styled.IconWrapper>
                <img src={video.thumbnail} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Styled.ModalContainer>
          <Styled.StyledModal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <Styled.VideoWrapper>
              <Styled.VideoPlayer
                url={modalVideo}
                controls="true"
                height="100%"
                width="100%"
                onRequestClose={closeModal}
              />
            </Styled.VideoWrapper>
          </Styled.StyledModal>
        </Styled.ModalContainer>
      </Styled.VideoArrayContainer>
    </Styled.VideoCatalogueContainer>
  );
};

export default VideoCatalogue;
