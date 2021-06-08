import { Application  } from "./deps.ts";
import { router } from "./birdsRouter.ts";
const app = new Application();
const port = 5000;

let respObj = {};

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
  next();
  respObj = { ...respObj, age: 36 };
  ctx.response.body = respObj;
});

app.use(async (ctx, next) => {
  respObj = { name: "Nishanth" };
  ctx.response.body = respObj;
});



app.listen({
  port: 5000,
});
console.info(`Server listening on port ${port}`);
