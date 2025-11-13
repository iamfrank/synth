# SYNTH

A tiny synth made with love and Web Audio API.

Check it out at https://iamfrank.github.io/synth/ !

## Links

* [List of key frequencies on Wikipedia](https://en.wikipedia.org/wiki/Piano_key_frequencies)

## More features

* Filters
  BiquadFilterNode for tone shaping (low-pass, high-pass, etc.).
* LFO (Low Frequency Oscillator) (optional for modulation)
  A slow oscillator modulating parameters like pitch or filter cutoff.
* Effects: Reverb, delay, distortion via additional Web Audio nodes.
* Preset system: Save and recall synth settings (in localStorage).
* Visualization: Real-time waveform or spectrum via AnalyserNode + <canvas>.
* MIDI Input: Use the Web MIDI API to connect physical keyboards.
* Loop device and sampling
