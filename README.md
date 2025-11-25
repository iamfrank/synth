# SYNTH

A tiny synth made with love and Web Audio API.

Check it out at [iamfrank.github.io/synth/](https://iamfrank.github.io/synth/) !

## Links

* [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
* [List of key frequencies on Wikipedia](https://en.wikipedia.org/wiki/Piano_key_frequencies)
* [synthityourself.com/](https://synthityourself.com/)
* [ADSR Envelope on Wikipedia](https://en.wikipedia.org/wiki/Envelope_(music))

## Idease for more features

* Loop device and sampling
* Filters
  BiquadFilterNode for tone shaping (low-pass, high-pass, etc.).
* LFO (Low Frequency Oscillator) (optional for modulation)
  A slow oscillator modulating parameters like pitch or filter cutoff.
* Effects: Reverb, delay, distortion via additional Web Audio nodes.
* Preset system: Save and recall synth settings (in localStorage).
* Visualization: Real-time waveform or spectrum via AnalyserNode + <canvas>.
* MIDI Input: Use the Web MIDI API to connect physical keyboards.

## Acknowledgements

https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API has been a great resource for learning how to use Web Audio API. Thanks, Mozilla!
