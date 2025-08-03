import React, { useRef, useImperativeHandle, forwardRef, useState, useEffect } from 'react';
const MusicPlayer = forwardRef(({ src = "headshot.mp3" }, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isPlayingRef = useRef(false);
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => {
      setIsPlaying(true);
      isPlayingRef.current = true;
    };
    const onPause = () => {
      setIsPlaying(false);
      isPlayingRef.current = false;
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current?.play();
    },
    pause: () => {
      audioRef.current?.pause();
    },
    toggle: () => {
      if (isPlayingRef.current) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
    },
    isPlaying: () => isPlayingRef.current,
    getAudioElement: () => audioRef.current,
  }));

  return (
    <audio

      ref={audioRef}
      src={process.env.PUBLIC_URL + '/' + src}
      hidden
      loop
    />
  );
});

export default MusicPlayer;
