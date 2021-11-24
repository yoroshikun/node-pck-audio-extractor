/**
 * @title Node PCK Audio Extractor
 * @description Extract .pck files
 * @author Drew Hutton <Yoroshi>
 * When modifying or redistributing this project, do not modify this notice.
 */

exports.wav2mp3 = async ({ outputDir, inputDir, createdFile }) => {
  const path = require('path');
  const util = require('util');
  const platform = require('os').platform();
  const exec = util.promisify(require('child_process').execFile);
  const ffmpeg =
    platform === 'win32'
      ? path.join(__dirname, 'libs', 'ffmpeg', 'bin', 'ffmpeg.exe')
      : 'ffmpeg';    
  const fileName = path.parse(createdFile).name;
  const outputFile = path.join(outputDir, fileName + '.mp3');
  const wavFilePath = path.join(inputDir, fileName + '.wav');

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

  console.info(
    `${createdFile.split('_')[0]}.pck -> ${createdFile} -> ${
      fileName
    }.wav -> ${fileName}.mp3`,
  );
};
