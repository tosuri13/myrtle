import { Hono } from "hono";
import { cors } from "hono/cors";
import { User } from "@myrtle/types/User";

// FIXME: 仮のデータベースを用意
const users: User[] = [{ userId: "tosuri13", userName: "嘆きのぺんぎん" }];

const app = new Hono()
  .basePath("/api")
  .use("*", cors())
  /**
   * NOTE: GET /api/users/{id}
   */
  .get("/users/:id", async (c) => {
    const userId = c.req.param("id");
    const user: User | undefined = await Promise.resolve(
      users.find((u) => u.userId == userId)
    );

    if (user == undefined) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json({ user }, 200);
  });

// NOTE: Client側から読み込むためのAppTypeをエクスポート
export type AppType = typeof app;

// NOTE: Lambdaとローカル環境、それぞれで動作できるように切り出し
export default app;
