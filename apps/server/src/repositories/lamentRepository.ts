import {
  DeleteItemCommand,
  DynamoDBClient,
  PutItemCommand,
  QueryCommand,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import { Lament, lamentScheme } from "@myrtle/types";

const LAMENTS_TABLE_NAME = "myrtle-laments-table";

const dynamodbClient = new DynamoDBClient({
  region: "ap-northeast-1",
});

export const getLaments = async (userId: string): Promise<Lament[]> => {
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

export const addLament = async (lament: Lament): Promise<void> => {
  const command = new PutItemCommand({
    Item: {
      userId: { S: lament.userId },
      lamentId: { S: lament.lamentId },
      content: { S: lament.content },
      postTime: { S: lament.postTime },
    },
    TableName: LAMENTS_TABLE_NAME,
  });
  await dynamodbClient.send(command);
};

export const updateLament = async (lament: Lament): Promise<void> => {
  const command = new UpdateItemCommand({
    ExpressionAttributeValues: {
      ":content": { S: lament.content },
      ":postTime": { S: lament.postTime },
    },
    Key: {
      userId: { S: lament.userId },
      lamentId: { S: lament.lamentId },
    },
    TableName: LAMENTS_TABLE_NAME,
    UpdateExpression: "SET content = :content, postTime = :postTIme",
  });
  await dynamodbClient.send(command);
};

export const deleteLament = async (
  userId: string,
  lamentId: string
): Promise<void> => {
  const command = new DeleteItemCommand({
    Key: {
      userId: { S: userId },
      lamentId: { S: lamentId },
    },
    TableName: LAMENTS_TABLE_NAME,
  });
  await dynamodbClient.send(command);
};
