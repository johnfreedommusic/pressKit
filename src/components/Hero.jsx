import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Icons
import { Icon } from "@iconify/react";
import { Light, Dark } from "../config";
import LogoLongLight from "../images/Logo Longer.png";
import LogoLongDark from "../images/Logo Longer White.png";
// Components
import { useErrorBoundary } from "react-error-boundary";
import { Link } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";

// #region styled-components
const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(135deg, var(--bs-primary), var(--bs-light))"
        : "linear-gradient(135deg, var(--bs-primary), var(--bs-dark))"};
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(0, 0, 0, 0.2)"};
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

  @media screen and (min-width: 1180px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Light}) top center fixed no-repeat`
          : `url(${Dark}) top center fixed no-repeat`};
      background-size: 100vw auto;
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Light}) center center fixed no-repeat`
          : `url(${Dark}) center center fixed no-repeat`};
      background-size: cover;
    }
  }
`;
// #endregion

// #region component
const propTypes = {};

const Hero = () => {
  const { showBoundary } = useErrorBoundary();
  const theme = useSelector(selectMode);

  return (
    <StyledHero>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <img
              src={theme === "dark" ? LogoLongDark : LogoLongLight}
              alt="Logo"
              className="mx-auto d-block"
              style={{ width: "28rem", maxWidth: "60vw" }}
            />
            <div className="d-flex align-items-center justify-content-center" style={{ marginTop: "1cm" }}>
              <SocialLinks />
            </div>
          </Col>
        </Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"Bio"} className="link-icons">
              <Icon icon="fa6-solid:circle-chevron-down" />
            </Link>
          </Col>
        </Row>
        <Button
          className="d-none"
          onClick={() =>
            showBoundary({
              name: "Error",
              message: "Simulated error message",
            })
          }
        >
          Simulate Error Boundary
        </Button>
      </Container>
    </StyledHero>
  );
};

Hero.propTypes = propTypes;
// #endregion

export default Hero;
