import {
  DeleteItemCommand,
  DynamoDBClient,
  PutItemCommand,
  QueryCommand,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import { type Lament, lamentScheme } from "@myrtle/types";

const LAMENTS_TABLE_NAME = "myrtle-laments-table";

const dynamodbClient = new DynamoDBClient({
  region: "ap-northeast-1",
});

export const getLaments = async (
  userId: string,
  limit?: number,
  cursor?: string,
): Promise<{ laments: Lament[]; nextCursor?: string }> => {
  const exclusiveStartKey = cursor
    ? JSON.parse(Buffer.from(cursor, "base64").toString("utf-8"))
    : undefined;

  const command = new QueryCommand({
    ExpressionAttributeValues: {
      ":userId": { S: userId },
    },
    KeyConditionExpression: "userId = :userId",
    ScanIndexForward: false,
    TableName: LAMENTS_TABLE_NAME,
    Limit: limit,
    ExclusiveStartKey: exclusiveStartKey,
  });
  const result = await dynamodbClient.send(command);

  if (result.Items === undefined) {
    throw new Error("No user found with the specified User ID");
  }

  const laments = result.Items.map((item) =>
    lamentScheme.parse({
      userId: item.userId.S,
      lamentId: item.lamentId.S,
      content: item.content.S,
      postTime: item.postTime.S,
    }),
  );

  const nextCursor = result.LastEvaluatedKey
    ? Buffer.from(JSON.stringify(result.LastEvaluatedKey)).toString("base64")
    : undefined;

  return { laments, nextCursor };
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
    UpdateExpression: "SET content = :content, postTime = :postTime",
  });
  await dynamodbClient.send(command);
};

export const deleteLament = async (
  userId: string,
  lamentId: string,
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
