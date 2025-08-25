import React from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Config
import { musicData } from "../config";
// Images
import Logo from "../images/logo.svg";

// #region styled-components
const StyledMusic = styled.section`
  .artwork-tile {
    position: relative;
    aspect-ratio: 1 / 1;
    border: var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--bs-body-bg);
    border-radius: 8px;
  }

  .artwork-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    gap: 0.5rem;
  }

  .artwork-tile:hover .overlay {
    opacity: 1;
  }

  .platforms {
    display: flex;
    gap: 1rem;
  }

  .platform-link {
    color: #fff;
    font-size: 2rem;
  }

  audio {
    width: 100%;
  }

  .song-title {
    margin-top: 1rem;
    text-align: center;
    font-weight: bold;
  }
`;
// #endregion

// #region component
const Musica = () => {
  return (
    <Element name={"Musica"} id="musica">
      <StyledMusic className="section">
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Musica"} />
        </Container>
        <Container className="mt-4">
          <Row xs={1} sm={2} md={2} lg={4} className="g-4">
            {musicData.slice(0, 4).map((song) => (
              <Col key={song.id}>
                <SongTile song={song} />
              </Col>
            ))}
          </Row>
        </Container>
      </StyledMusic>
    </Element>
  );
};
// #endregion

// Simple local song tile component with hover overlay
const SongTile = ({ song }) => {
  return (
    <>
      <div className="artwork-tile">
        <img
          src={song.artwork || Logo}
          alt={song.name}
          className="artwork-img"
          loading="lazy"
        />
        <div className="overlay">
          <div className="platforms">
            {song.links.spotify && (
              <a href={song.links.spotify} className="platform-link" aria-label="Open in Spotify" target="_blank" rel="noreferrer">
                <Icon icon="fa6-brands:spotify" />
              </a>
            )}
            {song.links.appleMusic && (
              <a href={song.links.appleMusic} className="platform-link" aria-label="Open in Apple Music" target="_blank" rel="noreferrer">
                <Icon icon="fa6-brands:apple" />
              </a>
            )}
            {song.links.amazonMusic && (
              <a href={song.links.amazonMusic} className="platform-link" aria-label="Open in Amazon Music" target="_blank" rel="noreferrer">
                <Icon icon="fa6-brands:amazon" />
              </a>
            )}
            {song.links.soundcloud && (
              <a href={song.links.soundcloud} className="platform-link" aria-label="Open in SoundCloud" target="_blank" rel="noreferrer">
                <Icon icon="fa6-brands:soundcloud" />
              </a>
            )}
          </div>
          {song.previewUrl && (
            <audio controls preload="none">
              <source src={song.previewUrl} />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      </div>
      <div className="song-title">
        <strong>{song.name}</strong>
      </div>
    </>
  );
};

export default Musica;


