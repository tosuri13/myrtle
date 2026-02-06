import * as cdk from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as cognito from "aws-cdk-lib/aws-cognito";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as nodejs from "aws-cdk-lib/aws-lambda-nodejs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as path from "node:path";
import type { Construct } from "constructs";

export class MyrtleServerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 🐧 DynamoDB Tables 🐧

    const mytleUsersTable = new dynamodb.Table(this, "MyrtleUsersTable", {
      tableName: "myrtle-users-table",
      partitionKey: {
        name: "userId",
        type: dynamodb.AttributeType.STRING,
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const myrtleLamentsTable = new dynamodb.Table(this, "MyrtleLamentsTable", {
      tableName: "myrtle-laments-table",
      partitionKey: {
        name: "userId",
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: "lamentId",
        type: dynamodb.AttributeType.STRING,
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // 🐧 S3 Bucket 🐧

    const myrtleUserMediaBucket = new s3.Bucket(this, "MyrtleUserMediaBucket", {
      bucketName: "myrtle-user-media-bucket",
      cors: [
        {
          allowedHeaders: ["*"],
          allowedMethods: [
            s3.HttpMethods.GET,
            s3.HttpMethods.POST,
            s3.HttpMethods.PUT,
          ],
          allowedOrigins: ["*"],
          exposedHeaders: ["Access-Control-Allow-Origin"],
        },
      ],
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // 🐧 IAM Role 🐧

    const myrtleServerFunctionRole = new iam.Role(
      this,
      "MyrtleServerFunctionRole",
      {
        roleName: "myrtle-server-function-role",
        assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
        inlinePolicies: {
          "myrtle-server-function-policy": new iam.PolicyDocument({
            statements: [
              new iam.PolicyStatement({
                effect: iam.Effect.ALLOW,
                actions: [
                  "dynamodb:DeleteItem",
                  "dynamodb:GetItem",
                  "dynamodb:PutItem",
                  "dynamodb:Query",
                  "dynamodb:UpdateItem",
                  "logs:CreateLogGroup",
                  "logs:CreateLogStream",
                  "logs:PutLogEvents",
                  "s3:GetObject",
                  "s3:PutObject",
                ],
                resources: ["*"],
              }),
            ],
          }),
        },
      },
    );

    // 🐧 Lambda Function 🐧

    const myrtleServerApiFunction = new nodejs.NodejsFunction(
      this,
      "MyrtleServerApiFunction",
      {
        functionName: "myrtle-server-api-function",
        entry: path.join(__dirname, "../../src/index.ts"),
        handler: "handler",
        runtime: lambda.Runtime.NODEJS_20_X,
        memorySize: 512,
        timeout: cdk.Duration.seconds(30),
        role: myrtleServerFunctionRole,
        bundling: {
          target: "node20",
          minify: false,
          sourceMap: false,
        },
      },
    );

    // 🐧 Cognito User Pool & Authorizer 🐧

    const myrtleUserPool = cognito.UserPool.fromUserPoolId(
      this,
      "MyrtleUserPool",
      process.env.COGNITO_USER_POOL_ID!,
    );

    const myrtleCognitoAuthorizer = new apigateway.CognitoUserPoolsAuthorizer(
      this,
      "MyrtleUserPoolAuthorizer",
      { cognitoUserPools: [myrtleUserPool] },
    );

    // 🐧 API Gateway 🐧

    const myrtleServerApi = new apigateway.RestApi(this, "MyrtleServerApi", {
      restApiName: "myrtle-server-api",
      deployOptions: {
        stageName: "v1",
      },
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowHeaders: ["Authorization", "Content-Type"],
        allowMethods: apigateway.Cors.ALL_METHODS,
      },
      defaultMethodOptions: {
        authorizer: myrtleCognitoAuthorizer,
        authorizationType: apigateway.AuthorizationType.COGNITO,
      },
    });

    const apiIntegration = new apigateway.LambdaIntegration(
      myrtleServerApiFunction,
    );

    myrtleServerApi.root.addMethod("ANY", apiIntegration);
    myrtleServerApi.root
      .addResource("{proxy+}")
      .addMethod("ANY", apiIntegration);
  }
}
