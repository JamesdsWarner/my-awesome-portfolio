import * as Styled from "./video-catalogue.styles";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper } from "swiper/react";

import { Pagination, Navigation } from "swiper";
import SwiperSlideVideo from "../swiper-slide-video/swiper-slide-video.component";
import { SwiperSlide } from "swiper/react";
import Typography from "../Typography/typography.component";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.styles.scss";

const VideoCatalogue = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

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
      thumbnail:
        "https://dx501lltpgacl.cloudfront.net/thumbnails/AmazonSustainabilityChallenge.mp4.png",
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
      video:
        "https://dx501lltpgacl.cloudfront.net/videos/Seenit+-+Employee+Spotlight+(CS+-+Roxane).mp4",
      thumbnail:
        "https://dx501lltpgacl.cloudfront.net/thumbnails/SeenitEmployeeSpotlight(CSRoxane).mp4.png",
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
      <Typography type="second-heading">Here's what I've done...</Typography>
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
          {VideoArray.map((video, i) => {
            return (
              <SwiperSlide onClick={() => openModal(video.video)}>
                <SwiperSlideVideo
                  video={video}
                  openModal={openModal}
                  isHovered={isHovered}
                  setIsHovered={setIsHovered}
                  key={i}
                />
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
