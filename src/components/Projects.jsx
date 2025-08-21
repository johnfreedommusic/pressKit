import React from "react";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
// Videos
import Video1 from "../videos/Reshape Videos for Press Kit 1.mp4";
import Video2 from "../videos/Reshape Videos for Press Kit 2.mp4";
import Video3 from "../videos/TikTok Mente Criminale in Sala Prove Take 26.mp4";
import Title from "./Title";

// #region component
const Projects = () => {
  const refs = React.useRef({});

  const handlePlay = (id) => {
    const players = refs.current;
    Object.entries(players).forEach(([key, el]) => {
      if (key !== id && el && !el.paused) {
        el.pause();
      }
    });
  };

  return (
    <Element name={"Video"} id="video">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Video"} />
          </Container>
          <Container className="mt-4">
            <Row className="g-4 justify-content-center">
              <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
                <div style={{ width: "100%", maxWidth: "360px", aspectRatio: "9 / 16", border: "var(--border)", overflow: "hidden", borderRadius: "0.5rem" }}>
                  <video
                    ref={(el) => (refs.current.left = el)}
                    onPlay={() => handlePlay("left")}
                    playsInline
                    controls
                    style={{ width: "100%", height: "100%" }}
                  >
                    <source src={Video3} type="video/mp4" />
                  </video>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
                <div style={{ width: "100%", maxWidth: "360px", aspectRatio: "9 / 16", border: "var(--border)", overflow: "hidden", borderRadius: "0.5rem" }}>
                  <video
                    ref={(el) => (refs.current.center = el)}
                    onPlay={() => handlePlay("center")}
                    playsInline
                    controls
                    style={{ width: "100%", height: "100%" }}
                  >
                    <source src={Video1} type="video/mp4" />
                  </video>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
                <div style={{ width: "100%", maxWidth: "360px", aspectRatio: "9 / 16", border: "var(--border)", overflow: "hidden", borderRadius: "0.5rem" }}>
                  <video
                    ref={(el) => (refs.current.right = el)}
                    onPlay={() => handlePlay("right")}
                    playsInline
                    controls
                    style={{ width: "100%", height: "100%" }}
                  >
                    <source src={Video2} type="video/mp4" />
                  </video>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Projects;
