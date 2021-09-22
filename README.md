# Kada

(Keep Audio Drivers Alive/Active)

## What is this?

On some (most) headphones, once no audio is being sent to the headphones, they don't expect any, therefor causing 100-200ms of no noise when audio starts playing.

This attempts to solve that by playing [an audio file with noise at close-to-0db](/sound.mp3) on loop, as to make your audio drivers expect audio.

## Installation

### Windows

Head to the releases tab, and fetch yourself the latest installer EXE.

### Linux

build it yourself i guess - i dont have the issue described earlier on linux so yeah

## Usage

When running, if the audio is playing, it should (in theory) make your audio drivers stay "alive"/"active". To prevent this (and potentially save battery), just close the window or pause the audio.
