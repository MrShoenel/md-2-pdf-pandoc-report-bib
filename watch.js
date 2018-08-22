/**
 * Supports two optional arguments:
 * - path to a file to convert using pandoc (default is 'report.md')
 * - number of seconds to use as debounce-interval while the file is
 *   watched for changes (default is 5)
 * 
 * Uses 'filename without extension.bib' for including references.
 */
const fs = require('fs')
, path = require('path')
, cp = require('child_process')
, argv = process.argv
, file = path.resolve(argv.length > 2 ? argv[2] : 'report.md')
, filePath = path.dirname(file)
, fileBase = path.basename(file)
, fileWithoutExt = fileBase.substr(
    0, fileBase.length - path.extname(fileBase).length)
, targetFile = path.resolve(path.join(filePath, `${fileWithoutExt}.pdf`))
, dbncSecs = argv.length > 3 ? parseInt(argv[3], 10) : 2
, templateFile = path.resolve(path.join(__dirname, 'template.latex'));


if (!fs.existsSync(templateFile)) {
  console.log('Generating template file..');
  cp.execSync(`pandoc -D latex > ${templateFile}`);
}


const toPdf = () => new Promise((resolve, reject) => {
  const proc = cp.spawn('pandoc', [
    `--template=${templateFile}`,
    `--biblio=${fileWithoutExt}.bib`,
    // '--csl=ieee.csl',
    '-s', file,
    '-o', `${targetFile}`
  ]);

  const stdErr = [];
  proc.stderr.on('data', chunk => {
    stdErr.push(chunk.toString());
  });

  proc.on('error', reject);
  proc.on('exit', (code, sig) => {
    if (code === 0) {
      resolve();
    } else {
      reject(stdErr.join(''));
    }
  });
});

const log = (msg, success) => {
  const m = success ? console.log : console.error
  , withColor = `${success ? '\x1b[40m\x1b[32m' : '\x1b[47m\x1b[31m'}${msg}\x1b[40m\x1b[37m`;
  m(withColor);
};


let timeout = null;
fs.watchFile(file, (_, __) => {
  console.log(`Detected change to file ${fileBase}..`);
  if (timeout !== null) {
    clearTimeout(timeout);
    timeout = null;
  }

  timeout = setTimeout(async() => {
    try {
      console.log(`Attempting pandoc conversion\n- ${fileBase} <<==>> ${path.basename(targetFile)}..`);
      await toPdf();
      log(`Created:\n- ${targetFile}`, true)
      console.log();
    } catch (e) {
      log(`Error:\n- ${e}`, false);
    }
  }, dbncSecs * 1e3);
});

log(`Watching file\n- ${fileBase} in\n- ${filePath}..`, true);
