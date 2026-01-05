import {
  type DynamoDBClient,
  GetItemCommand,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import { type User, userSchema } from "@myrtle/types";

const USERS_TABLE_NAME = "myrtle-users-table";

export class UserStore {
  private dynamodbClient: DynamoDBClient;

  constructor(dynamodbClient: DynamoDBClient) {
    this.dynamodbClient = dynamodbClient;
  }

  async getUser(userId: string): Promise<User> {
    const command = new GetItemCommand({
      Key: {
        userId: { S: userId },
      },
      TableName: USERS_TABLE_NAME,
    });
    const result = await this.dynamodbClient.send(command);

    if (result.Item === undefined) {
      throw new Error("No user found with the specified User ID");
    }

    return userSchema.parse({
      userId: result.Item.userId.S,
      name: result.Item.name.S,
      bio: result.Item.bio.S,
    });
  }

  async updateUser(user: {
    userId: string;
    name: string;
    bio: string;
  }): Promise<void> {
    const command = new UpdateItemCommand({
      ExpressionAttributeValues: {
        ":name": { S: user.name },
        ":bio": { S: user.bio },
      },
      Key: {
        userId: { S: user.userId },
      },
      TableName: USERS_TABLE_NAME,
      UpdateExpression: "SET name = :name, bio = :bio",
    });
    await this.dynamodbClient.send(command);
  }
}
