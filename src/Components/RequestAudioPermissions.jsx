import React, { useState } from 'react';
import styled from 'styled-components';
const RequestAudioPermission = ({ onAccept, onDecline }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleAccept = () => {
    onAccept();
    setVisible(false);
  };

  const handleDecline = () => {
    onDecline();
    setVisible(false);
  };


  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <p className="heading">Give the website some life!..</p>
          <p className="para">
            Hey we would like to play some music in the background it enhances the visuals with a sound visualizer, please allow the audio permissions below to continue.
          </p>
          <div className="btn-group">
            <button className="btn" onClick={handleAccept}>Accept</button>
            <button className="btn" onClick={handleDecline}>Decline</button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100dvh;
  width: 100dvw;
  position: absolute;
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;

  &::before {
    content: "";
    position: fixed;
    top: 0; 
    left: 0;
    width: 100dvw;
    height: 100dvh;
    background: rgba(0, 0, 0, 0.85);
    z-index: -1;
  }

  .card {
    position: relative;
    width: 22dvh;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    padding: 3dvh;
    overflow: hidden;
    border-radius: 2dvh;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
    background: #222;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0dvh;
    color: #e8e8e8;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .content .heading {
    font-weight: 700;
    font-size: 3dvh;
  }

  .btn-group {
    display: flex;
    gap: 1dvh;
  }
  .para {
    top: -2dvh;
    position: relative;
  }
  .content .para {
    line-height: 1.5;
    font-size: 1.2dvh
  }

  .content .btn {
    color: #e8e8e8;
    text-decoration: none;
    padding: .8dvh;
    font-weight: 600;
    border: none;
    cursor: pointer;
    width: 8dvh;
    font-size: 1dvh;
    background: linear-gradient(-45deg, #862020ff 0%, #323775ff 100%);
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .card:hover {
    box-shadow: none;
  }

  .card:hover .btn {
    color: #ffffffff;
  }

  .content .btn:hover {
    outline: 2px solid #e8e8e8;
    background: transparent;
  }

  .content .btn:active {
    box-shadow: none;
  }
`;

export default RequestAudioPermission;
