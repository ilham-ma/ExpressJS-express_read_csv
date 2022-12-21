const { readCsv } = require("@configs/csv");
const { responseSuccess } = require("@utils/response.util");

const readController = (req, res) => {
  const { files } = req;
  const result = readCsv(files.csv.data);

  return responseSuccess(res, result);
};

module.exports = { readController };
