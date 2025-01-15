import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { User, userSchema } from "@myrtle/types";

const USERS_TABLE_NAME = "myrtle-users-table";

const dynamodbClient = new DynamoDBClient({
  region: "ap-northeast-1",
});

export const getUser = async (userId: string): Promise<User> => {
  const command = new GetItemCommand({
    Key: {
      userId: { S: userId },
    },
    TableName: USERS_TABLE_NAME,
  });
  const result = await dynamodbClient.send(command);

  if (result.Item === undefined) {
    throw new Error("No user found with the specified User ID");
  }

  return userSchema.parse({
    userId: result.Item["userId"].S,
    name: result.Item["name"].S,
    profile: {
      bio: result.Item["profile"].M?.["bio"].S,
    },
  });
};
