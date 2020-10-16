/**
 * @title Node PCK Audio Extractor
 * @description Extract .pck files
 * @author Drew Hutton <Yoroshi>
 * When modifying or redistributing this project, do not modify this notice.
 */

exports.wem2wav = wem2wav = async ({
  outputDir,
  processingDir,
  createdFile,
}) => {
  const path = require('path');
  const util = require('util');
  const platform = require('os').platform();
  const exec = util.promisify(require('child_process').execFile);
  const vgmstream =
    platform === 'win32'
      ? path.join(__dirname, 'libs', 'vgmstream', 'vgmstream_cli.exe')
      : 'vgmstream_cli';
  const outputFile = path.join(outputDir, createdFile.split('.')[0] + '.wav');
  const createdFilePath = path.join(processingDir, createdFile);

  await exec(vgmstream, ['-o', outputFile, createdFilePath]);

  console.info(
    `${createdFile.split('_')[0]}.pck -> ${createdFile} -> ${
      createdFile.split('.')[0]
    }.wav`,
  );
};
