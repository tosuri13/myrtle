import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const BUCKET_NAME = process.env.MYRTLE_USER_MEDIA_BUCKET_NAME;

const s3Client = new S3Client({ region: "ap-northeast-1" });

export async function generateGetSignedUrl(
  userId: string,
  imageType: "avatar" | "profile",
): Promise<string> {
  const key = `${userId}/${imageType}`;

  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
}

export async function generatePutSignedUrl(
  userId: string,
  imageType: "avatar" | "profile",
  contentType: string,
): Promise<string> {
  const key = `${userId}/${imageType}`;

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    ContentType: contentType,
    CacheControl: "immutable, max-age=31536000",
  });

  return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
}
