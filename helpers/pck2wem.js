/**
 * @title Node PCK Audio Extractor
 * @description Extract .pck files
 * @author Drew Hutton <Yoroshi>
 * When modifying or redistributing this project, do not modify this notice.
 */

exports.pck2wem = async ({ pckFile, processingDir }) => {
  const path = require('path');
  const util = require('util');
  const platform = require('os').platform();
  const { b, bmsScript } = require('minimist')(process.argv.slice(2));
  const exec = util.promisify(require('child_process').execFile);
  const quickBMS =
    platform === 'win32'
      ? path.join(__dirname, 'libs', 'quickbms', 'quickbms.exe')
      : path.join(__dirname, 'libs', 'quickbms', 'quickbms');
  const script =
    b || bmsScript
      ? path.join(__dirname, 'libs', 'quickbms', 'scripts', b || bmsScript)
      : path.join(__dirname, 'libs', 'quickbms', 'scripts', 'wavescan.bms');
  const inputFile = path.join('.', 'input', pckFile);

  await exec(quickBMS, [script, inputFile, processingDir]);
};
