import * as Styled from "./video-catalogue.styles";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperSlideVideo from "../swiper-slide-video/swiper-slide-video.component";
import { SwiperSlide } from "swiper/react";
import Typography from "../Typography/typography.component";
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.styles.scss";
import { useEffect } from "react";

const VideoCatalogue = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const toggleModal = () => setIsOpen(!modalIsOpen);

  const openModal = (video) => {
    setModalVideo(video);
    toggleModal();
  };

  const closeModal = () => {
    toggleModal();
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const VideoFilenameArray = [
    "AmazonSustainabilityChallenge",
    "AmazonXSeenit",
    "HandMCommunityMeetUp",
    "SeenitEmployeeSpotlightCSRoxane",
    "SonyCustomerShowcase",
    "V2",
  ];

  return (
    <Styled.VideoCatalogueContainer>
      <Typography type="second-heading">Here's what I've done...</Typography>
      {windowDimensions.innerWidth < 750 ? (
        <Styled.VideoArrayContainer>
          {VideoFilenameArray.map((VideoFilename, i) => {
            return (
              <ReactPlayer
                url={`https://dx501lltpgacl.cloudfront.net/videos/${VideoFilename}Video.mp4`}
                light={`https://res.cloudinary.com/dbq4xtolf/image/upload/w_0.6,h_0.6,c_scale/portfolio/${VideoFilename}Thumbnail.webp`}
                key={i}
                height={"50vw"}
                width={"88.88vw"}
                onClick={() =>
                  openModal(`https://dx501lltpgacl.cloudfront.net/videos/${VideoFilename}Video.mp4`)
                }
              />
            );
          })}
        </Styled.VideoArrayContainer>
      ) : (
        <Styled.VideoCarouselContainer>
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
            shortswiper="false"
          >
            {VideoFilenameArray.map((VideoFilename, i) => {
              return (
                <SwiperSlide
                  onClick={() =>
                    openModal(
                      `https://dx501lltpgacl.cloudfront.net/videos/${VideoFilename}Video.mp4`
                    )
                  }
                  key={i}
                >
                  <SwiperSlideVideo
                    source={`https://res.cloudinary.com/dbq4xtolf/image/upload/w_317,h_187,c_scale/portfolio/${VideoFilename}Thumbnail.webp`}
                    openModal={openModal}
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    VideoFilename={VideoFilename}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Styled.VideoCarouselContainer>
      )}

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
    </Styled.VideoCatalogueContainer>
  );
};

export default VideoCatalogue;

const getWindowDimensions = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};
