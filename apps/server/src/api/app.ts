import { Hono } from "hono";
import { cors } from "hono/cors";
import { zValidator } from "@hono/zod-validator";
import { getUser } from "#repositories/userRepository";
import { z } from "zod";
import {
  getLaments,
  addLament,
  updateLament,
  deleteLament,
} from "#repositories/lamentRepository";
import { decodeTime, ulid } from "ulidx";
import { format } from "date-fns";
import { TZDate } from "@date-fns/tz";
import { lamentScheme } from "@myrtle/types";

const app = new Hono()
  .basePath("/api")
  .use(
    "*",
    cors({
      origin: "*",
      allowHeaders: ["Authorization", "Content-Type"],
      allowMethods: ["OPTIONS", "GET", "POST", "PUT", "DELETE"],
    }),
  )
  .onError((err, c) => {
    console.log(err);
    return c.json({ message: "An error has occurred on the server" }, 500);
  })
  .get("/users/:userId", async (c) => {
    const userId = c.req.param("userId");
    const user = await getUser(userId);

    return c.json({ ...user }, 200);
  })
  .get(
    "/users/:userId/laments",
    zValidator(
      "query",
      z.object({
        limit: z.string().optional(),
        cursor: z.string().optional(),
      }),
    ),
    async (c) => {
      const userId = c.req.param("userId");

      const query = c.req.valid("query");
      const limit = Number(query.limit) || undefined;
      const cursor = query.cursor;

      const result = await getLaments(userId, limit, cursor);

      return c.json(result, 200);
    },
  )
  .post(
    "users/:userId/laments",
    zValidator(
      "json",
      z.object({
        content: z.string(),
      }),
    ),
    async (c) => {
      const userId = c.req.param("userId");
      const { content } = c.req.valid("json");

      const lamentId = ulid();
      const postTime = format(
        new TZDate(decodeTime(lamentId), "Asia/Tokyo"),
        "yyyy/MM/dd HH:mm:ss",
      );

      const lament = lamentScheme.parse({
        userId,
        lamentId,
        content,
        postTime,
      });
      await addLament(lament);

      return c.body(null, 204);
    },
  )
  .put(
    "users/:userId/laments/:lamentId",
    zValidator(
      "json",
      z.object({
        content: z.string(),
        postTime: z.string(),
      }),
    ),
    async (c) => {
      const userId = c.req.param("userId");
      const lamentId = c.req.param("lamentId");
      const { content, postTime } = c.req.valid("json");

      const lament = lamentScheme.parse({
        userId,
        lamentId,
        content,
        postTime,
      });
      await updateLament(lament);

      return c.body(null, 204);
    },
  )
  .delete("users/:userId/laments/:lamentId", async (c) => {
    const userId = c.req.param("userId");
    const lamentId = c.req.param("lamentId");

    await deleteLament(userId, lamentId);

    return c.body(null, 204);
  });

// NOTE: Client側から読み込むためのAppTypeをエクスポート
export type AppType = typeof app;

// NOTE: Lambdaとローカル環境、それぞれで動作できるように切り出し
export default app;
