import { Hono } from "hono";
import { cors } from "hono/cors";
import { getUser } from "#repositories/userRepository";
import { getUserLaments } from "#repositories/lamentRepository";

const app = new Hono()
  .basePath("/api")
  .use(
    "*",
    cors({
      origin: "*",
      allowHeaders: ["Authorization", "Content-Type"],
      allowMethods: ["OPTIONS", "GET", "POST", "PUT", "DELETE"],
    })
  )
  .onError((err, c) => {
    console.log(err);
    return c.json({ message: "An error has occurred on the server" }, 500);
  })
  .get("/users/:id", async (c) => {
    const userId = c.req.param("id");
    const user = await getUser(userId);

    return c.json({ ...user }, 200);
  })
  .get("/users/:id/laments", async (c) => {
    const userId = c.req.param("id");
    const laments = await getUserLaments(userId);

    return c.json({ laments: laments }, 200);
  });

// NOTE: Client側から読み込むためのAppTypeをエクスポート
export type AppType = typeof app;

// NOTE: Lambdaとローカル環境、それぞれで動作できるように切り出し
export default app;
