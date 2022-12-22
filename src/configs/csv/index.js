const { parse } = require("csv-parse/sync");

const readCsv = (buffer) => {
  const result = parse(buffer, { columns: true });

  return result;
};

module.exports = { readCsv };
