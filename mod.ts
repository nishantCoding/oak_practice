import { Application, Context, isHttpError, log } from "./deps.ts";
import getErrorDetails from "./errorHandler.ts";
import { router } from "./routers/birdRouter.ts";

const app = new Application();
const port = 5000;

let respObj: { [key: string]: string } = {};

app.use(async (ctx: Context, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      getErrorDetails(ctx, err);
    } else {
      throw err;
    }
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

//***** The below snippet is to understand the middleware flow in oak */

// app.use(async (ctx, next) => {
//   await next();
//   respObj = { ...respObj, lastName: 'K' };
//   ctx.response.body = respObj;
// });

// app.use(async (ctx, next) => {
//   await next();
//   respObj = { ...respObj, firstName: 'Nishant' };
//   ctx.response.body = respObj;
// });

// app.use(async (ctx, next) => {
//   respObj = { middleName: 'S' };
//   ctx.response.body = respObj;
//   await next();
// });

app.listen({
  port: 5000,
});
log.info(`Server listening on port ${port}`);
