import {
  type DynamoDBClient,
  GetItemCommand,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import {
  GetObjectCommand,
  PutObjectCommand,
  type S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { type MediaType, type User, userSchema } from "@myrtle/types";

const USERS_TABLE_NAME = "myrtle-users-table";
const USER_MEDIA_BUCKET_NAME = "myrtle-user-media-bucket";

export class UserStore {
  private s3Client: S3Client;
  private dynamodbClient: DynamoDBClient;

  constructor(s3Client: S3Client, dynamodbClient: DynamoDBClient) {
    this.s3Client = s3Client;
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
      ExpressionAttributeNames: {
        "#name": "name",
      },
      ExpressionAttributeValues: {
        ":name": { S: user.name },
        ":bio": { S: user.bio },
      },
      Key: {
        userId: { S: user.userId },
      },
      TableName: USERS_TABLE_NAME,
      UpdateExpression: "SET #name = :name, bio = :bio",
    });
    await this.dynamodbClient.send(command);
  }

  async getUploadUrl(
    userId: string,
    mediaType: MediaType,
    contentType: string,
  ): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: USER_MEDIA_BUCKET_NAME,
      Key: `${userId}/${mediaType.toLowerCase()}`,
      ContentType: contentType,
      CacheControl: "immutable, max-age=31536000",
    });

    return await getSignedUrl(this.s3Client, command, { expiresIn: 3 });
  }

  async getDownloadUrl(userId: string, mediaType: MediaType): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: USER_MEDIA_BUCKET_NAME,
      Key: `${userId}/${mediaType.toLowerCase()}`,
    });

    return await getSignedUrl(this.s3Client, command, { expiresIn: 3 });
  }
}
