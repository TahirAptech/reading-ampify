/**
 * @type {import('@types/aws-lambda').PreTokenGenerationTriggerHandler}
 */
exports.handler = async event => {
  
    const {request} = event;
    const {userAttributes, groupConfiguration} = request;
    
    console.log("Request", JSON.stringify(request, null, 2))
    
    const claims = {}
    
    const isAuthor = groupConfiguration.groupsToOverride.includes("Author");
    const isReader = groupConfiguration.groupsToOverride.includes("Reader");
    const isSchoolFounder = groupConfiguration.groupsToOverride.includes("SchoolFounder");
    
    // if (isAuthor)claims.authorREF = userAttributes["sub"];
    // if (isReader && !isReader)claims.readerREF = userAttributes["sub"];
    
    // @franck : follow example for your schools
    // e.g : if (isSchoolFounder)claims.schoolREF = userAttributes["custom:schood_id"];
    // if (isSchoolFounder)claims.schoolREF = userAttributes["custom:schood_id"]
    
    console.log("Claims", JSON.stringify(claims, null, 2))
    
    event.response = {
      claimsOverrideDetails: {
        claimsToAddOrOverride: claims,
      },
    };
    // Return to Amazon Cognito
    return event;
  };
  