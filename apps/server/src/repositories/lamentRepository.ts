import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import { Lament, lamentScheme } from "@myrtle/types";

const LAMENTS_TABLE_NAME = "myrtle-laments-table";

const dynamodbClient = new DynamoDBClient({
  region: "ap-northeast-1",
});

export const getUserLaments = async (userId: string): Promise<Lament[]> => {
  const command = new QueryCommand({
    ExpressionAttributeValues: {
      ":userId": { S: userId },
    },
    KeyConditionExpression: "userId = :userId",
    TableName: LAMENTS_TABLE_NAME,
  });
  const result = await dynamodbClient.send(command);

  if (result.Items === undefined) {
    throw new Error("No user found with the specified User ID");
  }

  return result.Items.map((item) =>
    lamentScheme.parse({
      userId: item["userId"].S,
      lamentId: item["lamentId"].S,
      content: item["content"].S,
      postTime: item["postTime"].S,
    })
  );
};
