import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavigationTemplate = ({ topGiven, leftGiven, text, route }) => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <button
        style={{ top: topGiven, left: leftGiven }}
        onClick={() => navigate(route)}
      >
        {text}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    font-size: 1.5dvh;
    color: #e1e1e1;
    font-family: 'MunikaMedium';
    letter-spacing: 0.2ch;
    cursor: pointer;
    position: absolute;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  button:focus,
  button:hover {
    color: #fff;
  }

  button:focus:after,
  button:hover:after {
    width: 100%;
    left: 0%;
  }

  button:after {
    content: "";
    pointer-events: none;
    bottom: -0.2dvh;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 0.15dvh;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;

export default NavigationTemplate;
