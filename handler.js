'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'hello word ',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.goodbye = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'goodbue word',
        input: event,
      },
      null,
      2
    ),
  };
};
