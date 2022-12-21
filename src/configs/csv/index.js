const { parse } = require("csv-parse/sync");

const readCsv = (buffer) => {
  const result = parse(buffer, { delimiter: ";", columns: true });

  return result;
};

module.exports = { readCsv };
