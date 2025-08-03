import React from 'react';
import styled from 'styled-components';

const videoModules = require.context('../video', false, /\.(mp4|webm)$/);
const videoPaths = videoModules.keys().map(videoModules);

const VideoContainer = () => {
  return (
    <StyledWrapper>
      <div style={{overflow: 'auto',scrollbarWidth: 'none'}} className="card">
        <div className="label">VIDEOS</div>
        <div className="video-grid">
          {videoPaths.map((src, i) => (
            <video key={i} src={src} controls muted loop className="video" />
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .card {
    box-sizing: border-box;
    position: relative;
    width: 80dvh;
    height: 30dvh;
    -ms-overflow-style: none; 
    top: 15dvh;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8px);
    border-radius: 2dvh;
    overflow: hidden;
    padding: 1dvh;
    display: flex;
    flex-direction: column;
    gap: 1dvh;
  }
  .video-grid::-webkit-scrollbar {
    display: none;        
   } 
  .label {
    font-size: 1.5dvh;
    color: white;
    position: absolute;
    bottom: 1dvh;
    font-family: 'KaratinaRegular';
    left: 1dvh;
    z-index: 1;
  }

  .video-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1dvh;
    height: 100%;
    width: 100%;
    overflow: auto;
    scrollbar-width: none;
    justify-content: center;
    align-items: center;
  }

  .video {
    flex: 1 1 30%;
    max-width: 30%;
    max-height: 80%;
    object-fit: cover;
    border-radius: 1dvh;
  }
`;

export default VideoContainer;
