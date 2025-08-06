import React from 'react';
import styled from 'styled-components';

const ListButton = () => {
  return (
    <StyledWrapper>
      <div className="button-container" onClick={() => window.open('https://discord.com/users/1365827144663564380')}>
        <button className="button">
          {/* Discord Icon */}
          <svg style={{ height: '1vw' }} xmlns="http://www.w3.org/2000/svg" fill="blaack" viewBox="0 0 48 48">
            <path d="M41.625 10.77c-3.98-3.2-10.277-3.74-10.547-3.76a.792.792 0 00-.99.586c-.015.02-.152.336-.305.828 2.633.448 5.867 1.343 8.793 3.16.469.29.614.91.324 1.378a1.008 1.008 0 01-1.574.324C32.492 10.16 26.21 10 25 10s-7.496.16-12.523 3.28a1.003 1.003 0 11-1.375-1.378c2.926-1.812 6.16-2.71 8.793-3.15-.152-.496-.29-.812-.305-.836a.793.793 0 00-.99-.586c-.273.02-6.57.57-10.605 3.82C6.215 12.76 2 24.15 2 34c0 .176.047.344.133.496 2.906 5.11 10.84 6.445 12.648 6.504a.808.808 0 00.617-.41l1.828-2.516c-4.933-1.274-7.453-3.437-7.598-3.566a1 1 0 011.41-1.41C11.234 33.06 15.875 37 25 37c9.14 0 13.781-3.953 13.828-3.992a1 1 0 011.41 1.414c-.145.129-2.664 2.29-7.598 3.562l1.83 2.516c.187.258.488.41.808.41h.031c1.808-.059 9.742-1.395 12.648-6.504A.995.995 0 0048 34c0-9.85-4.215-21.24-6.375-23.23zM18.5 30c-1.933 0-3.5-1.789-3.5-4s1.567-4 3.5-4 3.5 1.789 3.5 4-1.567 4-3.5 4zm13 0c-1.934 0-3.5-1.789-3.5-4s1.566-4 3.5-4 3.5 1.789 3.5 4-1.566 4-3.5 4z"/>
          </svg>
        </button>

        <button className="button" onClick={() => window.open('https://github.com/dwellerx')}>
          {/* GitHub Icon */}
          <svg style={{ height: '1vw', position : "relative" }} xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.387c.6.112.82-.26.82-.577v-2.023c-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.082-.729.082-.729 1.204.085 1.837 1.24 1.837 1.24 1.07 1.835 2.807 1.305 3.492.997.11-.775.418-1.306.76-1.606-2.665-.304-5.467-1.333-5.467-5.933 0-1.311.47-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.47 11.47 0 016 0c2.29-1.554 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.222 0 4.61-2.807 5.626-5.48 5.922.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
};



const StyledWrapper = styled.div`
  position: absolute;
  top: 1.5dvh;
  left: 3dvh;
  z-index: 1000;

  .button-container {
    display: flex;
    background-color: rgba(255, 255, 255);
    width: 10.5dvh;
    height: 3dvh;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 1) 0px 5px 15px,
          rgba(255, 255, 255, .5) 5px 10px 15px;
  }
   
  .button {
    outline: 0 !important;
    border: 0 !important;
    width: 4dvh;
    height: 4dvh;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

  .button:hover {
    transform: translateY(-3px);
    filter: invert(.6);
  }

  .icon {
    filter: invert(1);
    font-size: 2dvh;
    height: 2dvh;
  }
`;


export default ListButton;
