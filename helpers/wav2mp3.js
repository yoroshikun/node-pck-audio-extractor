/**
 * @title Node PCK Audio Extractor
 * @description Extract .pck files
 * @author Drew Hutton <Yoroshi>
 * When modifying or redistributing this project, do not modify this notice.
 */

exports.wav2mp3 = async ({ outputDir, inputDir, createdFile }) => {
  const path = require('path');
  const util = require('util');
  const platform = require('os').platform;
  const exec = util.promisify(require('child_process').execFile);
  const ffmpeg =
    platform === 'win32'
      ? path.join('.', 'libs', 'ffmpeg', 'bin', 'ffmpeg.exe')
      : 'ffmpeg';
  const outputFile = path.join(outputDir, createdFile.split('.')[0] + '.mp3');
  const wavFilePath = path.join(inputDir, createdFile.split('.')[0] + '.wav');

  await exec(ffmpeg, [
    '-i',
    wavFilePath,
    '-y',
    '-ar',
    '44100',
    '-b:a',
    '320k',
    outputFile,
  ]);

  console.log(
    `${createdFile.split('_')[0]}.pck -> ${createdFile} -> ${
      createdFile.split('.')[0]
    }.wav -> ${createdFile.split('.')[0]}.mp3`,
  );
};
