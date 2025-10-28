import React from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Element } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";
// Images
import Logo from "../images/logo.svg";
import LaCometaArt from "../images/La cometa di Halley (Copertina).jpg";
// Audio
import LaCometaAudio from "../audio/John Freedom - La cometa di Halley.mp3";

// #region styled-components
const StyledNuovaUscita = styled.section`
  .artwork-wrapper {
    max-width: 360px;
    width: 100%;
  }

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
const NuovaUscita = () => {
  const song = React.useMemo(
    () => ({
      id: "nuova-uscita",
      name: "La cometa di Halley",
      artwork: LaCometaArt,
      previewUrl: LaCometaAudio,
      links: {
        spotify: "https://open.spotify.com/track/4C72XCifgqbhcEwiVjsLUq?si=1b6b9199067449bf",
        appleMusic: "https://music.apple.com/us/album/la-cometa-di-halley/1839675475?i=1839675476",
        amazonMusic: "https://music.amazon.com/albums/B0FQVLHN3B?trackAsin=B0FQW7G11R",
        soundcloud: "https://soundcloud.com/john-freedom-832358450/la-cometa-di-halley?utm_medium=api&utm_campaign=social_sharing&utm_source=id_314547",
      },
    }),
    []
  );

  return (
    <Element name={"Nuova uscita"} id="nuova-uscita">
      <StyledNuovaUscita className="section">
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Nuova uscita"} />
        </Container>
        <Container className="mt-4">
          <Row className="g-4 align-items-center">
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <div className="artwork-wrapper">
                <div className="artwork-tile">
                  <img
                    src={song.artwork || Logo}
                    alt={song.name}
                    className="artwork-img"
                    loading="lazy"
                  />
                  <div className="overlay">
                    <div className="platforms">
                      {song.links?.spotify && (
                        <a href={song.links.spotify} className="platform-link" aria-label="Open in Spotify" target="_blank" rel="noreferrer">
                          <Icon icon="fa6-brands:spotify" />
                        </a>
                      )}
                      {song.links?.appleMusic && (
                        <a href={song.links.appleMusic} className="platform-link" aria-label="Open in Apple Music" target="_blank" rel="noreferrer">
                          <Icon icon="fa6-brands:apple" />
                        </a>
                      )}
                      {song.links?.amazonMusic && (
                        <a href={song.links.amazonMusic} className="platform-link" aria-label="Open in Amazon Music" target="_blank" rel="noreferrer">
                          <Icon icon="fa6-brands:amazon" />
                        </a>
                      )}
                      {song.links?.soundcloud && (
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
              </div>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <p>
                'La cometa di Halley' trascina l'ascoltatore nei primi anni del novecento, raccontando una storia di emigrazione in America attraverso gli occhi di un ragazzino
              </p>
              <p>
                Il testo, a tratti cinematografico, smuove la coscienza di chi ascolta, con voli pindarici che uniscono l'immigrazione italo-americana con quella dei giorni nostri. La strumentale, con un sound potente e ricco di immagini, arriva come un pugno nello stomaco
              </p>
            </Col>
          </Row>
        </Container>
      </StyledNuovaUscita>
    </Element>
  );
};
// #endregion

export default NuovaUscita;


