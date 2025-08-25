import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const StyledLocalPlayer = styled.div`
  .local-player {
    background: var(--bs-body-bg);
    border: var(--border);
    border-radius: 8px;
    padding: 1rem;
    margin-top: 1rem;
  }

  .player-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .player-artwork {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
  }

  .player-info h4 {
    margin: 0;
    font-size: 1.1rem;
  }

  .player-info p {
    margin: 0;
    color: var(--bs-secondary);
    font-size: 0.9rem;
  }

  .audio-controls {
    width: 100%;
  }

  .audio-controls audio {
    width: 100%;
    height: 40px;
  }

  .local-links {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    justify-content: center;
  }

  .local-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--bs-primary);
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.9rem;
    transition: background-color 0.2s;
  }

  .local-link:hover {
    background: var(--bs-primary-dark);
    color: white;
  }
`;

const LocalMusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <StyledLocalPlayer>
      <div className="local-player">
        <div className="player-header">
          <img 
            src={song.artwork} 
            alt={song.name} 
            className="player-artwork"
          />
          <div className="player-info">
            <h4>{song.name}</h4>
            <p>Local Preview</p>
          </div>
        </div>
        
        <div className="audio-controls">
          <audio 
            ref={audioRef}
            onEnded={handleAudioEnded}
            preload="metadata"
          >
            <source src={song.previewUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div className="local-links">
          <button 
            onClick={handlePlayPause}
            className="local-link"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            <Icon icon={isPlaying ? "mdi:pause" : "mdi:play"} />
            {isPlaying ? "Pause" : "Play"}
          </button>
          
          {song.links.spotify && (
            <a href={song.links.spotify} className="local-link" target="_blank" rel="noreferrer">
              <Icon icon="fa6-brands:spotify" />
              Spotify
            </a>
          )}
          
          {song.links.soundcloud && (
            <a href={song.links.soundcloud} className="local-link" target="_blank" rel="noreferrer">
              <Icon icon="fa6-brands:soundcloud" />
              SoundCloud
            </a>
          )}
        </div>
      </div>
    </StyledLocalPlayer>
  );
};

export default LocalMusicPlayer;
