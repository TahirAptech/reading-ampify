const aws = require("aws-sdk");

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

exports.handler = async (event) => {
  console.log("Processing verified-email");
  const forceUserAutoConfirm =
    event.request.userAttributes["cognito:user_status"] === "EXTERNAL_PROVIDER";

  console.log(JSON.stringify(event.request));

  console.log("forceUserAutoConfirm", forceUserAutoConfirm);
  if (forceUserAutoConfirm) {
    const params = {
      UserAttributes: [
        {
          Name: "email_verified",
          Value: "true",
        },
      ],
      UserPoolId: event.userPoolId,
      Username: event.userName,
    };

    const response = await cognitoidentityserviceprovider
      .adminUpdateUserAttributes(params)
      .promise();
    console.log(response);
  }

  return event;
};
