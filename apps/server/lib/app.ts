import * as cdk from "aws-cdk-lib";
import { MyrtleServerStack } from "./stacks/server";

const app = new cdk.App();

new MyrtleServerStack(app, "myrtle-server-app", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "ap-northeast-1",
  },
});
