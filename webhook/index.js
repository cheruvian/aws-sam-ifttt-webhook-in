'use strict';
console.log('Loading function');

const createResponse = (body, statusCode = 200) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body)
    };
};

exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event));

    let response;
    if (event.queryStringParameters && process.env.API_KEY === event.queryStringParameters.API_KEY) {
        response = createResponse({'some': 'data'});
    } else {
        response = createResponse('Not Authorized', 403);
    }

    console.log('Response:', response);
    callback(null, response);
};
