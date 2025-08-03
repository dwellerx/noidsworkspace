import React from 'react';
import styled from 'styled-components';

const videoLinks = [
    'https://files.catbox.moe/pw595z.mp4',
    'https://files.catbox.moe/2f38lz.mp4',
    'https://files.catbox.moe/ic3hqk.mp4',
    'https://files.catbox.moe/zkcmrl.mp4',
    'https://files.catbox.moe/4d6g44.mp4',
    'https://files.catbox.moe/x2ulpy.mp4',
    'https://files.catbox.moe/cnpdty.mp4',
    'https://files.catbox.moe/wv5f96.mp4',
    'https://files.catbox.moe/y4rmb0.mp4',
    'https://files.catbox.moe/50hr9m.mp4',
    'https://files.catbox.moe/vcv7lp.mp4'
];

const VideoContainer = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="label">VIDEOS</div>
        <div className="video-grid">
          {videoLinks.map((src, i) => (
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
    position: relative;
    width: 80dvh;
    height: 30dvh;
    top: 15dvh;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8px);
    border-radius: 2dvh;
    padding: 1dvh;
    display: flex;
    flex-direction: column;
    gap: 1dvh;
    overflow: hidden;
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

  .video-grid::-webkit-scrollbar {
    display: none;
  }

  .label {
    font-size: 1.5dvh;
    color: white;
    position: absolute;
    bottom: 1dvh;
    left: 1dvh;
    font-family: 'KaratinaRegular';
    z-index: 1;
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
