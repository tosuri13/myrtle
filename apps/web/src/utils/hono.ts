import type { AppType } from "@myrtle/server";
import { hc } from "hono/client";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_MYRTLE_API_ENDPOINT!);
