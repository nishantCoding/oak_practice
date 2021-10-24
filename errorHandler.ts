import { isHttpError, log, Status } from "./deps.ts";

const getErrorDetails = (ctx: any, err: any) => {
  log.error(err);

  switch (err.status) {
    case Status.NotFound:
      ctx.response.status = Status.NotFound;
      ctx.response.body = {
        message: "Resource not found",
      };
      break;
    case Status.Forbidden:
      ctx.response.status = Status.Forbidden;
      ctx.response.body = {
        message: "You don't have permissions",
      };
      break;
    default:
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        message: "Kernel Panic: Internal Server Error x.x !!!",
      };
  }
};

export default getErrorDetails;
