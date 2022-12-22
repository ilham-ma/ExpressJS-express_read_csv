const { parse } = require("csv-parse/sync");

const readCsv = (buffer) => {
  try {
    const result = parse(buffer, { delimiter: ";", columns: true });

    return result;
  } catch (_) {
    try {
      const result = parse(buffer, { delimiter: ",", columns: true });

      return result;
    } catch (_) {
      console.log("error");
    }
  }
};

module.exports = { readCsv };
