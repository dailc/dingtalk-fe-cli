import chalk from 'chalk';
import * as semver from 'semver';

export default function checkNodeVersion (wanted: string, id: string) {
  if (!semver.satisfies(process.version, wanted, { includePrerelease: true, })) {
    console.log(chalk.red(
      'You are using Node ' + process.version + ', but this version of ' + id +
      ' requires Node ' + wanted + '.\nPlease upgrade your Node version.',
    ));
    process.exit(1);
  }
}