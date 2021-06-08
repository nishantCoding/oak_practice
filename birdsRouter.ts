import { Router } from "./deps.ts";

export const router = new Router();

const birdsList = [
  { id: 1, name: "Sparrow" },
  { id: 2, name: "Peacock" },
  { id: 3, name: "Swan" },
];

router.get("/list", (ctx) => {
  ctx.response.body = birdsList;
});

router.get("/:id", (ctx) => {
  const { id } = ctx.params;

  //@ts-ignore
  if (isNaN(id)) {
    ctx.response.body = {
      message: "Invalid id",
    };
    ctx.response.status = 400;
  } else {
    const bird = birdsList.find((bird) => {
      return bird.id.toString() === id;
    });
    ctx.response.body = bird;
  }
});

router.post("/", async(ctx) => {
    const payload = await ctx.request.body().value;
    //@ts-ignore  
      const bird = birdsList.push(payload);
      ctx.response.status= 201;
      ctx.response.body = bird;
    
  });
