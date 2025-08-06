import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Default.css';
import ActionList from '../Components/ActionList';
import FollowCursor from '../Components/FollowCursor';
import AudioVisualizer from '../Components/Visualizer';
import NavigationTemplate from '../Components/NavigationTemplate';
function InvalidRoute({ musicPlayerRef }) {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="App">
      <header className={`App-header${fadeIn ? ' fade-in' : ''}`}> 
        <div className="titlebgdirector">THIS IS NOT MY WORKSPACE..</div>
         <FollowCursor />
        <div>
          <ActionList />
        </div>
        <button className="continueError" onClick={() => navigate('/')}>
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
              <div className="continue-text-error">Back Home!</div>
        </button>
        <NavigationTemplate  topGiven={'2.2dvh'} leftGiven={'25dvh'} text={"Home"} route={'/'}/>
        <NavigationTemplate  topGiven={'2.2dvh'} leftGiven={'33dvh'} text={"About me"} route={'/aboutme'}/>
        <NavigationTemplate  topGiven={'2.2dvh'} leftGiven={'45dvh'} text={"PWORK"} route={'/pwork'}/>
        <AudioVisualizer musicPlayerRef={musicPlayerRef}/>
        <div className='error-description'>Page not found are you sure this is what you are looking for?<div></div> Click the button Above to go back to home.</div>
      </header>
      <title>About me</title>
    </div>
  );
}

export default InvalidRoute;
