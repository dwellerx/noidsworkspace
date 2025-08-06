import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ReviewCard = ({cardPosTop,cardPosLeft,topGiven,leftGiven,stars,description,icon_path}) => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <div
        className="card"
        onClick={() => navigate('/pwork')}
        style={{
          top: cardPosTop,
          left: cardPosLeft
      }}
      >
        <div className="avatar-wrapper">
          <img
            src={icon_path}
            alt="Discord Avatar"
            className="avatar"
            style={{ width: '5dvh', height: '5dvh' }}
          />
          <div className="online-indicator" />
        </div>
        <div style={{ color: 'white', position: 'absolute', top: topGiven, left: leftGiven, fontSize: '1.8dvh', width: '20dvh'}} className="label">{description}</div>
        <div style={{ color: 'white', position: 'absolute', bottom: '10dvh', left: '5.5dvh', fontSize: '1.5dvh', width: '20dvh'}} className="label">{stars}</div>
         <div className="label" style={{ color: 'white', position: 'absolute', bottom: '1dvh', left: '1dvh', fontSize: '1.5dvh' }}>USER</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    transform-origin: top left;
    box-sizing: border-box;
    position: relative;
    width: 16dvw;
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
    gap: 1dvh;
  }

  .avatar-wrapper {
    position: relative;
    left: -12dvh;
    top: -1.5dvh;
  }

  .avatar {
    height: 4em;
    width: 4em;
    border-radius: 50%;
    object-fit: cover;
  }

  .online-indicator {
    position: absolute;
    bottom: .8dvh;
    border: .1dvh solid black;
    right: 0;
    width: 1dvh;
    height: 1dvh;
    background-color: #b7ff95ff;
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

export default ReviewCard;
