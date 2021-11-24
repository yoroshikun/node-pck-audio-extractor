/**
 * @title Node PCK Audio Extractor
 * @description Extract .pck files
 * @author Drew Hutton <Yoroshi>
 * When modifying or redistributing this project, do not modify this notice.
 */

exports.wav2flac = async ({ outputDir, inputDir, createdFile }) => {
  const path = require('path');
  const util = require('util');
  const platform = require('os').platform();
  const exec = util.promisify(require('child_process').execFile);
  const ffmpeg =
    platform === 'win32'
      ? path.join(__dirname, 'libs', 'ffmpeg', 'bin', 'ffmpeg.exe')
      : 'ffmpeg';
  const fileName = path.parse(createdFile).name;
  const outputFile = path.join(outputDir, fileName + '.flac');
  const wavFilePath = path.join(inputDir, fileName + '.wav');

  await exec(ffmpeg, [
    '-i',
    wavFilePath,
    '-y',
    '-af',
    'aformat=s16:44100',
    outputFile,
  ]);

  console.info(
    `${createdFile.split('_')[0]}.pck -> ${createdFile} -> ${
      fileName
    }.wav -> ${fileName}.flac`,
  );
};
