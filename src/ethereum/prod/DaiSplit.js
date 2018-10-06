import web3 from './web3';
import compiledDaiSplit from '../build/DaiSplit.json';
import config from './config';

const DaiSplit = new web3.eth.Contract(
  JSON.parse(compiledDaiSplit.interface),
  config
);

export default DaiSplit;
