let audioContext = null;
let source = null;
let analyser = null;

export function setupAudioNodes(audioElement) {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioCtx();
  }

  if (!source) {
    source = audioContext.createMediaElementSource(audioElement);
    analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 256;
  }

  return { audioContext, source, analyser };
}
