import { Hono } from "hono";
import { cors } from "hono/cors";
import { User, Lament } from "@myrtle/types";

// FIXME: 仮のデータベースを用意
const usersDataBase: User[] = [
  {
    id: "tosuri13",
    name: "嘆きのぺんぎん",
    profile: {
      bio: "雑用系エンジニアでござい",
    },
  },
];

// FIXME: 仮のデータベースを用意
const lamentsDataBase: Lament[] = [
  {
    id: "1",
    content: "仕事だるすぎる。早くおうちに帰って寝たいヨォ〜",
    postTime: new Date("2024-10-28T15:00:00"),
  },
  {
    id: "2",
    content: "傘持ってないのに雨めっちゃ降ってきちゃった(泣)",
    postTime: new Date("2024-10-29T23:00:00"),
  },
  {
    id: "3",
    content:
      "IKEAのサーモン美味しすぎて泣きそう。今日も冷凍パック買っちゃった...",
    postTime: new Date("2024-10-30T04:00:00"),
  },
  {
    id: "4",
    content: "指スケの新しいセクションを買ってもらった〜!!",
    postTime: new Date("2024-10-31T17:00:00"),
  },
  {
    id: "5",
    content:
      "指スケ飛ばしてたら車輪が一個どっかに飛んでっちゃったよぉ〜!!泣きそう。",
    postTime: new Date("2024-10-31T21:00:00"),
  },
];

const app = new Hono()
  .basePath("/api")
  .use("*", cors())
  .onError((err, c) => {
    console.log(err);
    return c.json({ message: "An error has occurred on the server" }, 500);
  })
  .get("/users/:id", async (c) => {
    const userId = c.req.param("id");
    const user: User | undefined = await Promise.resolve(
      usersDataBase.find((user) => user.id == userId)
    );

    if (user == undefined) {
      return c.json({ error: "No user found with the specified User ID" }, 404);
    }

    return c.json({ ...user }, 200);
  })
  .get("/users/:id/laments", async (c) => {
    const userId = c.req.param("id");

    // FIXME: DynamoDBでいい感じに検索するので理論上いらない
    const user: User | undefined = await Promise.resolve(
      usersDataBase.find((user) => user.id == userId)
    );

    if (user == undefined) {
      return c.json({ error: "No user found with the specified User ID" }, 404);
    }

    // FIXME: postTimeなどはmapで明示的にstringに変換してから送信したほうがいい
    const laments: Lament[] = lamentsDataBase;

    return c.json({ laments: laments }, 200);
  });

// NOTE: Client側から読み込むためのAppTypeをエクスポート
export type AppType = typeof app;

// NOTE: Lambdaとローカル環境、それぞれで動作できるように切り出し
export default app;
