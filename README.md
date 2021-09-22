# Kada

(Keep Audio Drivers Alive/Active)

## What is this?

On some (most) headphones, once no audio is being sent to the headphones, they don't expect any, therefor causing 100-200ms of no noise when audio starts playing.

This attempts to solve that by playing [an audio file with noise at close-to-0db](/sound.mp3) on loop, as to make your audio drivers expect audio.

## Installation

Head to the releases tab, and fetch yourself the latest portable EXE. Place that in your autorun/desktop/wherever, and it will start this minimal Electron application on system start.

## Usage

When running, if the audio is playing, it should (in theory) make your audio drivers stay "alive"/"active". To prevent this (and potentially save battery), just close the window or pause the audio.
