import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DiscordIcon = () => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <div
        className="card"
        onClick={() => navigate('/pwork')}
      >
        <div className="avatar-wrapper">
          <img
            src="../images/blackgoldmask.png"
            alt="Discord Avatar"
            className="avatar"
            style={{ width: '10dvh', height: '10dvh' }}
          />
          <div className="online-indicator" />
        </div>
        <div style={{ color: 'white', position: 'absolute', bottom: '-3.5dvh', left: '-.2dvh', fontSize: '3dvh', width: '20dvh'}} className="label">Check my past work</div>
         <div className="label" style={{ color: 'white', position: 'absolute', bottom: '1dvh', left: '1dvh', fontSize: '1.5dvh' }}>PAGE</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    box-sizing: border-box;
    position: relative;
    width: 20dvh;
    top: 5dvh;
    left: 0dvh;
    height: 10dvh;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8px);
    border-radius: 2dvh;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-family: 'KaratinaRegular';
    color: rgba(255, 255, 255, 0.8);
    gap: 1em;
  }

  .avatar-wrapper {
    position: relative;
  }

  .avatar {
    height: 4em;
    width: 4em;
    border-radius: 50%;
    object-fit: cover;
  }

  .online-indicator {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 2.5dvh;
    height: 2.5dvh;
    background-color: #ffe395ff;
    border-radius: 50%;
  }

  .card:hover {
    border: 1px solid black;
    transform: scale(1.05);
  }

  .card:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;

export default DiscordIcon;
