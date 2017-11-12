# aws-sam-ifttt-webhook-in
Amazon Lambda Backed API Gateway Backend for an IFTTT WebHook into your AWS account


## AWS Deployment
Configure your AWS credentials and region.

Set an environment variable named `S3_BUCKET`.  This will be used for uploading your lambda function artifacts.

Finally choose an `api_key` that we'll require for IFTTT authorization and set it in the `package.json file line 7`. 

I recommend using a tool like [passwordgenerator](https://passwordsgenerator.net/) to generate at least a 128 character key.

Once those values are set you can `build`, `package` and `deploy` using `npm run` scripts specified in the `package.json` file.

The simplest way to get started is:

`npm run bpd`


## IFTTT Configuration

In IFTTT select the Webhook integration.

If you want to forward along ingredients from your IFTTT Applet Trigger, select POST and provide a payload to send to your Lambda Function.

You can choose to hardcode your endpoint or allow it to be configured by the Applet user.

![IFTTT Configuration Screenshot](https://raw.githubusercontent.com/cheruvian/aws-sam-ifttt-webhook-in/master/img/ifttt-config.png)
