import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../Default.css';
import ActionList from '../Components/ActionList';
import FollowCursor from '../Components/FollowCursor';
import AudioVisualizer from '../Components/Visualizer';
import DiscordIcons from '../Components/DiscordIcons';
import GithubIcon from '../Components/GithubIcons';
import PWork from '../Components/PWork';
import NavigationTemplate from '../Components/NavigationTemplate';
function Director({ musicPlayerRef }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="App">
      <header className={`App-header${fadeIn ? ' fade-in' : ''}`}>
        <img src="../images/gmail.png" alt="gmail" style={{ height: "2dvh", top: "2vw", position: "absolute" }} />
        <img src={logo} className="App-logo" alt="logo" />
        <DiscordIcons/>
        <GithubIcon/>
        <PWork/>
        <label style={{background: 'transparent',bottom: '97dvh', position: 'absolute', fontFamily: 'MunikaMedium', fontSize:'2dvh', zIndex: '50000'}}>Sorry about some items scaling im still working on the website lol</label>
        <div className='directorDescription'>I'm a young developer with solid experience to bring to the table. I’ve spent a lot of time learning by doing building projects,<br/> solving problems, and deep researches. I mostly create Roblox games, but I also have experience working with Python, Luau,<br/> C#, C++, and HTML and mild 3D Modelling. Over time, I’ve picked up a strong understanding of how systems connect, from<br/>  databases to frameworks and more.<br/> 
I enjoy working independently with a clear set of goals. I’m the kind of person who doesn’t wait around I like to get things done,<br/>  test ideas, and keep moving forward. I’m always learning.<br/> 
This portfolio is a snapshot of what I’ve worked on so far. Feel free to explore, and if anything catches your eye or you want to<br/> collaborate, the links below or at the top left are the way to reach me. Thanks for checking it out—hope you enjoy the visit.
        </div>
        <div className="titlebgdirector">NNOID'S WORKSPACE</div>
        <div className='gmail'>at lowriderenjoyer@gmail.com</div>
        <FollowCursor />
        <NavigationTemplate  topGiven={'2.2dvh'} leftGiven={'25dvh'} text={"Home"} route={'/'}/>
        <NavigationTemplate  topGiven={'2.2dvh'} leftGiven={'35dvh'} text={"PWORK"} route={'/pwork'}/>
        <div>
          <ActionList />
        </div>
        <AudioVisualizer musicPlayerRef={musicPlayerRef} />
      </header>
      <title>About me</title>
    </div>
  );
}

export default Director;
