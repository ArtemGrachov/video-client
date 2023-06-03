const fs = require('fs');
const path = require('path');
require('dotenv').config();

const config = require('./config');

module.exports = function() {
  const variablesStr = config
    .VARIABLES
    .map(varname => `${varname}: '${process.env[varname] ?? ''}'`)
    .join(', ');

  const output = `export const environment = {${variablesStr}};`;

  fs.writeFileSync(
    path.join(__dirname, '..', config.ENV_FILE_OUTPUT_PATH),
    output,
  );
};
