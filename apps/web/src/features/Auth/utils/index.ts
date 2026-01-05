import { fetchAuthSession } from "aws-amplify/auth";

export const getAuthToken = async () => {
  const { tokens } = await fetchAuthSession();

  if (!tokens || !tokens.idToken) {
    throw new Error("Failed to retrieve the ID Token");
  }

  return tokens.idToken.toString();
};
