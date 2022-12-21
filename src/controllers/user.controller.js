require("module-alias/register");
const { registerService } = require("@services/user.service");
const {
  responseCreated,
  responseBadRequest,
} = require("../utils/response.util");

const registerController = async (req, res) => {
  try {
    await registerService(req.body);

    return responseCreated(res);
  } catch (error) {
    return responseBadRequest(res, error);
  }
};

module.exports = { registerController };
