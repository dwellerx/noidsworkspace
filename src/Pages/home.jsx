import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import '../Default.css';
import Loader from '../Components/PlayLoader';
import ActionList from '../Components/ActionList';
import NavigationTemplate from '../Components/NavigationTemplate';
import FollowCursor from '../Components/FollowCursor';
import AudioVisualizer from '../Components/Visualizer';

function Home({ musicPlayerRef }) {
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(false);
  const songs = ["Headshot - IShowSpeed","This could be us - Rae Sremmurd","Black Beatles - Rae Sremmurd","I Know The End - Phoebe Bridgers"];
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleContinue = () => {
    setTimeout(() => setLoading(true), 600);
    const titlebg = document.documentElement.getElementsByClassName('titlebg')[0];
    titlebg.classList.add('animate-move');
    setHidden(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/aboutme');
    }, 3000);
  };

  return (
    <div className="App">
      <header className={`App-header${fadeIn ? ' fade-in' : ''}`}>
        {!hidden && (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <button className="continue" onClick={handleContinue}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
              <div className="continue-text">Continue</div>
            </button>
            <div className="sub-title">WELCOME</div>
            <div className="description">
              <div />
                 Yooo welcome to my workspace wander around... check if you like sum. Don't hesitate to contact me for details. Also enjoy da music 😁<br></br>{songs.map((song, index) => (<div key={index}>{song}</div>
                 ))}
            </div>
          </>
        )}

        <div>
          <ActionList />
        </div>
        <NavigationTemplate  topGiven={'2.2dvh'} leftGiven={'25dvh'} text={"About Me"} route={'/aboutme'}/>
        <NavigationTemplate  topGiven={'2.2dvh'} leftGiven={'38dvh'} text={"PWORK"} route={'/pwork'}/>
        <div className="titlebg">NNOID'S WORKSPACE</div>
        <FollowCursor />
        <AudioVisualizer musicPlayerRef={musicPlayerRef} />
        {loading && <Loader.PlayLoader />}
      </header>
    </div>
  );
}

export default Home;
