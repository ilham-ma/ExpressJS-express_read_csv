const responseHandler = (res, statusCode, message, data, error) => {
  if (typeof statusCode !== "number") return;

  if (typeof message !== "string") return;

  if (typeof data !== "object" && typeof data !== "undefined") return;

  if (typeof error !== "object" && typeof error !== "undefined") return;

  return res.status(statusCode).json({ message, data, error });
};

const responseSuccess = (res, data = {}, message = "SUCCESS") => {
  responseHandler(res, 200, message, data, undefined);
};

const responseCreated = (res, data = {}, message = "CREATED") => {
  responseHandler(res, 201, message, data, undefined);
};

const responseNotFound = (res, message = "NOT FOUND") => {
  responseHandler(res, 404, message, undefined, undefined);
};

const responseBadRequest = (res, error = [], message = "BAD REQUEST") => {
  responseHandler(res, 400, message, undefined, error);
};

const responseUnauthorize = (res, error = [], message = "UNAUTHORIZED") => {
  responseHandler(res, 401, message, undefined, error);
};

const responseInternalServerError = (
  res,
  message = "INTERNAL SERVER ERROR"
) => {
  responseHandler(res, 500, message, undefined, undefined);
};

module.exports = {
  responseSuccess,
  responseBadRequest,
  responseCreated,
  responseInternalServerError,
  responseNotFound,
  responseUnauthorize,
};
