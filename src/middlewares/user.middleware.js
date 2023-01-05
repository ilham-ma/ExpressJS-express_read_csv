require("module-alias/register");
const { responseBadRequest } = require("@utils/response.util");

const authorizedMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return responseBadRequest(res);
  }

  next();
};

const loginMiddleware = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return responseBadRequest(res);
  }

  next();
};

module.exports = { authorizedMiddleware, loginMiddleware };
