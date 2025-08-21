import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Photos will be auto-imported from ../images/photoes
import { Icon } from "@iconify/react";

// #region styled-components
const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }

  .gallery {
    display: none;
  }

  .carousel {
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    aspect-ratio: 4 / 5;
    border: none;
    overflow: hidden;
    background: var(--bs-body-bg);
  }

  .photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Adjacent slides inside the same frame */
  .slide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    overflow: hidden;
  }
  .slide.center {
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    aspect-ratio: 4 / 5;
    border: none;
    z-index: 2;
  }
  .slide.side {
    width: 22%;
    aspect-ratio: 4 / 5;
    opacity: 0.8;
    border: none;
    z-index: 1;
  }
  .slide.left { left: -4%; }
  .slide.right { right: -4%; }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    color: ${({ theme }) => (theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)")};
    z-index: 2;
  }

  .arrow.left { left: 0.25rem; }
  .arrow.right { right: 0.25rem; }
`;
// #endregion

// #region component
const propTypes = {
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string,
  moreInfo: PropTypes.string,
};

const AboutMe = ({ avatar_url, bio, moreInfo }) => {
  // Auto-import all images in images/photoes (jpg, jpeg, png, gif, webp)
  let photos = [];
  try {
    const ctx = require.context("../images/photoes", false, /\.(png|jpe?g|gif|webp)$/i);
    photos = ctx
      .keys()
      .sort()
      .map(ctx);
  } catch (e) {
    photos = [];
  }
  return (
    <Element name={"Bio"} id="bio">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Bio"} />
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                {bio && <p>{bio}</p>}
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
          </Row>
          {photos.length > 0 && (
            <Row className="mt-4">
              <Col className="d-flex justify-content-center">
                <Carousel images={photos} />
              </Col>
            </Row>
          )}
        </Container>
      </StyledAboutMe>
    </Element>
  );
};

AboutMe.propTypes = propTypes;
// #endregion

export default AboutMe;

// Local carousel component with arrows
const Carousel = ({ images }) => {
  const [index, setIndex] = React.useState(0);
  const total = images.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="carousel">
      <button className="arrow left" aria-label="Previous" onClick={prev}>
        <Icon icon="mdi:chevron-left" width="32" height="32" />
      </button>
      {/* Left (previous) */}
      <div className="slide side left">
        <img src={images[(index - 1 + total) % total]} alt="Previous" className="photo-img" />
      </div>
      {/* Center (current) */}
      <div className="slide center">
        <img src={images[index]} alt={`Photo ${index + 1}`} className="photo-img" />
      </div>
      {/* Right (next) */}
      <div className="slide side right">
        <img src={images[(index + 1) % total]} alt="Next" className="photo-img" />
      </div>
      <button className="arrow right" aria-label="Next" onClick={next}>
        <Icon icon="mdi:chevron-right" width="32" height="32" />
      </button>
    </div>
  );
};
