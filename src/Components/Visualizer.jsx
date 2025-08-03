import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { setupAudioNodes } from './audioContextManager';

const VisualizerWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100dvh;
  z-index: -1;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;
  pointer-events: none;
`;

export default function AudioVisualizer({ musicPlayerRef }) {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const analyserRef = useRef(null);

  useEffect(() => {
    const audioElement = musicPlayerRef.current?.getAudioElement();
    if (!audioElement) return;

    const { analyser } = setupAudioNodes(audioElement);
    analyserRef.current = analyser;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = 100;
    }

    resize();
    window.addEventListener('resize', resize);

    function draw() {
      animationIdRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        ctx.fillStyle = `rgba(${barHeight + 50}, 100, 100, 1)`;
        ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
        x += barWidth + 1;
      }
    }

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [musicPlayerRef]);

  return (
    <VisualizerWrapper>
      <canvas
        ref={canvasRef}
        style={{ backgroundColor: 'transparent', width: '102%', height: '100%' }}
      />
    </VisualizerWrapper>
  );
}
