import React, { useState, useEffect } from 'react';
import '../Default.css';
import ActionList from '../Components/ActionList';
import FollowCursor from '../Components/FollowCursor';
import AudioVisualizer from '../Components/Visualizer';
import NavigationTemplate from '../Components/NavigationTemplate';
import ReviewCard from '../Components/Reviews';
import VideoContainer from '../Components/VideoContainer';
import ImageContainer from '../Components/ImageContainer';

function PWork({ musicPlayerRef }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0)
    setFadeIn(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.body.style.scrollbarWidth = 'none';
    document.body.style.msOverflowStyle = 'none';
    const style = document.createElement('style');
    document.body.style.maxHeight = '200dvh'
    style.id = 'hide-scrollbar-style';
    style.innerHTML = `body::-webkit-scrollbar { display: none; }`;
    document.head.appendChild(style);

    return () => {
      document.body.style.overflow = '';
      document.body.style.scrollbarWidth = '';
      document.body.style.msOverflowStyle = '';
      const existingStyle = document.getElementById('hide-scrollbar-style');
      if (existingStyle) document.head.removeChild(existingStyle);
    };
  }, []);

  return (
    <div className="App">
      <header className={`App-header${fadeIn ? ' fade-in' : ''}`}>
        <div style={{ fontSize: '20dvw' }} className="titlebgdirector">NNOID'S WORKSPACE</div>
        <FollowCursor />
        <ActionList />
        <VideoContainer />
        <ImageContainer />
        <NavigationTemplate topGiven={'2.2dvh'} leftGiven={'25dvh'} text={'About Me'} route={'/aboutme'} />
        <NavigationTemplate topGiven={'2.2dvh'} leftGiven={'38dvh'} text={'Home'} route={'/'} />
        <label
          style={{
            background: 'transparent',
            bottom: '195dvh',
            position: 'relative',
            fontFamily: 'MunikaMedium',
            fontSize: '2dvh',
            zIndex: 50000
          }}
        >
          Sorry about some items scaling im still working on the website lol
        </label>
        <AudioVisualizer musicPlayerRef={musicPlayerRef} />
        <ReviewCard
          cardPosTop={'-169dvh'}
          cardPosLeft={'35dvh'}
          topGiven={'1.3dvh'}
          leftGiven={'7dvh'}
          stars={'⭐⭐⭐⭐'}
          description={
            '5/5 Since your scripts are high quality and they are easy to understand About the dead lines you always respect them.Had a great experience overall.'
          }
          icon_path={'../images/43c880aaf025b68a5db9eaf5e7994c17.png'}
        />
        <ReviewCard
          cardPosTop={'-179dvh'}
          cardPosLeft={'-35dvh'}
          topGiven={'1.3dvh'}
          leftGiven={'7dvh'}
          stars={'⭐⭐⭐⭐'}
          description={
            'you get them done relatively quickly in relation to the time and they are often great, and you are very understanding about price.'
          }
          icon_path={'../images/bathtubonstilts.png'}
        />
        <ReviewCard
          cardPosTop={'-189dvh'}
          cardPosLeft={'-0dvh'}
          topGiven={'1.3dvh'}
          leftGiven={'7dvh'}
          stars={'⭐⭐⭐⭐⭐'}
          description={
            '5/5 Since your scripts are high quality and they are easy to understand About the dead lines you always respect them.Had a great experience overall.'
          }
          icon_path={'../images/eres.png'}
        />
      </header>
      <title>About me</title>
    </div>
  );
}

export default PWork;
