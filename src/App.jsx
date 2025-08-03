import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import PWROK from './Pages/pwork';
import Director from './Pages/aboutme';
import MusicPlayer from './Components/MusicPlayer';
import PlayPause from './Components/PlayPause';
import RequestAudioPermission from './Components/RequestAudioPermissions';
import InvalidRoute from './Pages/invalidRoute'
import './App.css';

const songs = ["Music/headshot.mp3", "Music/tcbu.mp3", "Music/bb.mp3", "Music/ikte.mp3"];

function App() {
  const musicPlayerRef = useRef(null);
  const [currentSong] = useState(() => songs[Math.floor(Math.random() * songs.length)]);
  const [blockAudio, setBlockAudio] = useState(true);
  const [audioDeclined, setAudioDeclined] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pageKey, setPageKey] = useState(0);

  useEffect(() => {
    if (musicPlayerRef.current) {
      if (isPlaying) {
        musicPlayerRef.current.play();
      } else {
        musicPlayerRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleUserAccept = () => {
    setBlockAudio(false);
    setAudioDeclined(false);
    setIsPlaying(true);
    setPageKey(prev => prev + 1); 
  };

  const handleUserDecline = () => {
    setBlockAudio(false);
    setAudioDeclined(true);
    setIsPlaying(false);
    setPageKey(prev => prev + 1); 
  };

  return (
    <BrowserRouter>
      {!blockAudio && <MusicPlayer ref={musicPlayerRef} src={currentSong} />}
      <PlayPause
        musicRef={musicPlayerRef}
        isPlaying={isPlaying}
        onToggle={setIsPlaying}
      />
      {blockAudio && !audioDeclined && (
        <RequestAudioPermission
          onAccept={handleUserAccept}
          onDecline={handleUserDecline}
        />
      )}
      <Routes>
        <Route path="/" element={<Home key={pageKey} musicPlayerRef={musicPlayerRef} />} />
        <Route path="/aboutme" element={<Director key={pageKey} musicPlayerRef={musicPlayerRef} />} />
        <Route path="/pwork" element={<PWROK key={pageKey} musicPlayerRef={musicPlayerRef} />} />
        <Route path="*" element={<InvalidRoute key={pageKey} musicPlayerRef={musicPlayerRef}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
