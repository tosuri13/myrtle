import type { ResourcesConfig } from "aws-amplify";

export const authConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID!,
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID!,
    },
  },
};
