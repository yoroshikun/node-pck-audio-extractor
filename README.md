# Node PCK Audio Extractor

Multi platform, Multi core, Multi format, Converter for .pck files into various workable files

## Features

- Multi format export [`.wav`, `.mp3`, `.flac`]
- Multi platform (uses the deps installer [here](https://github.com/yoroshikun/node-pck-audio-extractor-deps-installer))
- Multi threading support
- Multi BMS script support (see options)

## Requirements

- Node 12+
- ffmpeg [installed by deps installer]
- quickbms & scripts [installed by deps installer]
- vgstream [installed by deps installer]
- git (for fetching the deps installer)

#### Deps installer requirements

- Node 12+
- (linux and macos require brew)

More info [here](https://github.com/yoroshikun/node-pck-audio-extractor-deps-installer)

## Usage

1. Find your audio files, For example for Genshin Impact

```
GenshinImpact_Data/StreamingAssets/Audio/GeneratedSoundBanks/Windows
```

Move the .pck files you want to extract into the `input` folder. The files _must_ be directly inside the folder - no subdirectories.

2. Install dependencies

```bash
./setup
# Windows use setup.cmd
yarn install
```

3. Run the program

```bash
node decode.js
```

The files in `./input` will be converted to .wav files by default inside `./output`.

## Options

### Extra encoding

You can pass an optional argument to export the audio in different formats.

Valid arguments are `flac`, `mp3`

Can be entered multiple times for multiple export

Example

```bash
node decode.js --extraEncode flac
node decode.js -e flac -e mp3
```

Encoding details

```
flac: lossless, 16bit, 44100 sample rate
mp3: 320kbit/s, 44100 sample rate
```

### Customs bms script

The deps installer installs the latest collection of bms scripts to ultilize, you can pass an argument to set this.

default: `wavescan.bms`

```
node decode.js --bmsScript custom.bms
node decode.js -b custom.bms
```

## Thanks to

- [vgmstream](https://github.com/losnoco/vgmstream)
- [ffmpeg](https://ffmpeg.org/)
- [quickbms](https://aluigi.altervista.org/quickbms.htm)
