const { execSync } = require('child_process');

const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

if (currentBranch !== 'main') {
  console.error(`Error: Releases can only be made from the 'main' branch. Current branch is '${currentBranch}'.`);
  process.exit(1);
}
