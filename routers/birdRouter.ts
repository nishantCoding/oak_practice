import { Context, log, Router } from "../deps.ts";
import { getAll, getById, post } from "../controllers/birdController.ts";
import { birdsMap } from "../data/birds.ts";
export const router = new Router();

router.get("/birds", async (ctx) => {
  ctx.response.body = getAll();
});

router.get("/birds/:id", async (ctx) => {
  const { id } = ctx.params;
  const result = getById(id!);
  if (result) {
    ctx.response.body = result;
  } else {
    ctx.throw(404, "Resource not found.");
  }
});

router.post("/", async (ctx) => {
  let payload = await ctx.request.body().value;
  const id = crypto.randomUUID();
  payload = { ...payload, id };
  birdsMap.set(id, payload);
  ctx.response.status = 201;
  ctx.response.body = payload;
});
