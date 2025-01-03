import { handle } from "hono/aws-lambda";
import app from "@/api/app";

// NOTE: Lambda用のエントリーポイントを設定
export const handler = handle(app);
