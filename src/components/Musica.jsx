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

// Resolve links and preview when only Spotify is provided
const SongTile = ({ song }) => {
  const [title, setTitle] = React.useState(song.name);
  const [artwork, setArtwork] = React.useState(song.artwork || null);
  const [previewUrl, setPreviewUrl] = React.useState(song.previewUrl || null);
  const [links, setLinks] = React.useState(song.links || {});

  React.useEffect(() => {
    let cancelled = false;
    async function resolveFromSpotify() {
      try {
        let nextLinks = { ...links };
        let nextArtwork = artwork;
        let nextPreview = previewUrl;
        let nextTitle = title;

        const spotifyUrl = song.links?.spotify;
        if (spotifyUrl) {
          const odesliUrl = `https://api.song.link/v1-alpha.1/links?url=${encodeURIComponent(
            spotifyUrl
          )}`;
          const res = await fetch(odesliUrl);
          if (res.ok) {
            const data = await res.json();
            const lbp = data?.linksByPlatform || {};
            const euid = lbp.spotify?.entityUniqueId;
            if (euid && data.entitiesByUniqueId && data.entitiesByUniqueId[euid]) {
              const ent = data.entitiesByUniqueId[euid];
              nextTitle = ent.title || nextTitle;
              nextArtwork = nextArtwork || ent.thumbnailUrl || nextArtwork;
            }
            nextLinks = {
              ...nextLinks,
              spotify: lbp.spotify?.url || nextLinks.spotify,
              appleMusic: lbp.appleMusic?.url || lbp.itunes?.url || nextLinks.appleMusic,
              amazonMusic: lbp.amazonMusic?.url || nextLinks.amazonMusic,
              soundcloud: lbp.soundcloud?.url || nextLinks.soundcloud,
            };

            // Prefer exact Apple Music lookup for accurate preview/artwork
            if (!nextPreview && nextLinks.appleMusic) {
              try {
                const urlObj = new URL(nextLinks.appleMusic);
                const trackIdParam = urlObj.searchParams.get("i");
                let trackId = trackIdParam;
                if (!trackId) {
                  // Fallback: try to extract trailing numeric id from path
                  const idMatch = urlObj.pathname.match(/\/(id)?(\d+)/);
                  if (idMatch) {
                    trackId = idMatch[2];
                  }
                }
                if (trackId) {
                  const lookupRes = await fetch(`https://itunes.apple.com/lookup?id=${trackId}`);
                  if (lookupRes.ok) {
                    const lookupJson = await lookupRes.json();
                    const track = lookupJson?.results?.find((r) => r.wrapperType === "track") || lookupJson?.results?.[0];
                    if (track) {
                      nextPreview = track.previewUrl || nextPreview;
                      if (!nextArtwork && track.artworkUrl100) {
                        nextArtwork = track.artworkUrl100.replace("100x100bb.jpg", "600x600bb.jpg");
                      }
                    }
                  }
                }
              } catch (_) {
                // ignore lookup errors
              }
            }
          }
        }

        if (!nextPreview) {
          const term = encodeURIComponent(nextTitle);
          if (term) {
            const itunesUrl = `https://itunes.apple.com/search?media=music&entity=song&limit=1&term=${term}`;
            const itRes = await fetch(itunesUrl);
            if (itRes.ok) {
              const it = await itRes.json();
              if (it.results && it.results.length) {
                const t = it.results[0];
                nextPreview = t.previewUrl || nextPreview;
                if (!nextArtwork && t.artworkUrl100) {
                  nextArtwork = t.artworkUrl100.replace("100x100bb.jpg", "600x600bb.jpg");
                }
                nextLinks.appleMusic = nextLinks.appleMusic || t.trackViewUrl;
              }
            }
          }
        }

        if (!cancelled) {
          setTitle(nextTitle);
          setArtwork(nextArtwork);
          setPreviewUrl(nextPreview);
          setLinks(nextLinks);
        }
      } catch (_) {
        // ignore
      }
    }

    // Only run if we have a Spotify link and missing fields
    if (song.links?.spotify && (!song.previewUrl || !song.links.appleMusic || !song.artwork)) {
      resolveFromSpotify();
    }
    return () => {
      cancelled = true;
    };
  }, [song.links, song.previewUrl, song.artwork, title]);

  return (
    <>
      <div className="artwork-tile rounded">
        <img
          src={artwork || Logo}
          alt={title}
          className="artwork-img"
          loading="lazy"
        />
        <div className="overlay">
          <div className="platforms">
            {links.spotify && (
              <a href={links.spotify} className="platform-link" aria-label="Open in Spotify" target="_blank" rel="noreferrer">
                <Icon icon="fa6-brands:spotify" />
              </a>
            )}
            {links.appleMusic && (
              <a href={links.appleMusic} className="platform-link" aria-label="Open in Apple Music" target="_blank" rel="noreferrer">
                <Icon icon="fa6-brands:apple" />
              </a>
            )}
            {links.amazonMusic && (
              <a href={links.amazonMusic} className="platform-link" aria-label="Open in Amazon Music" target="_blank" rel="noreferrer">
                <Icon icon="fa6-brands:amazon" />
              </a>
            )}
            {links.soundcloud && (
              <a href={links.soundcloud} className="platform-link" aria-label="Open in SoundCloud" target="_blank" rel="noreferrer">
                <Icon icon="fa6-brands:soundcloud" />
              </a>
            )}
          </div>
          {previewUrl && (
            <audio controls preload="none">
              <source src={previewUrl} />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      </div>
      <div className="mt-2 text-center">
        <strong>{title}</strong>
      </div>
    </>
  );
};

export default Musica;


