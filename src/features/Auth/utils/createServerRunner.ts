import { createServerRunner } from "@aws-amplify/adapter-nextjs";

import { authConfig } from "@/features/Auth/configs/authConfig";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: authConfig,
});
