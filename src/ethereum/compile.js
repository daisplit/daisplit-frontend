const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const DaiSplit = path.resolve(__dirname, 'contracts', 'DaiSplit.sol');

const input = {
  'DaiSplit.sol': fs.readFileSync(DaiSplit, 'utf8')
};
console.log(input);
const output = solc.compile({ sources: input }).contracts;
console.log(output);
fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(
      buildPath,
      contract.substring(0, contract.indexOf('.')) + '.json'
    ),
    output[contract]
  );
}
