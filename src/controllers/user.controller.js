require("module-alias/register");
const { registerService } = require("@services/user.service");
const {
  responseCreated,
  responseSuccess,
  responseBadRequest,
} = require("../utils/response.util");
const axios = require("axios").default;

const registerController = async (req, res) => {
  try {
    await registerService(req.body);

    return responseCreated(res);
  } catch (error) {
    return responseBadRequest(res, error);
  }
};

const loginController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await axios.post(
      "https://gateway.telkomuniversity.ac.id/issueauth",
      { username, password }
    );

    return responseSuccess(res, response.data);
  } catch (error) {
    console.log(error);
    return responseBadRequest(res, error);
  }
};

const profileController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await axios.post(
      "https://gateway.telkomuniversity.ac.id/issueauth",
      { username, password }
    );

    return responseSuccess(res, response.data);
  } catch (error) {
    console.log(error);
    return responseBadRequest(res, error);
  }
};

module.exports = { registerController, loginController, profileController };
