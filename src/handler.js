'use strict';

module.exports.generateRandomNumber = (event) => {
  const random = parseInt(Math.random()*1000);
  console.log("The generated ramdom number is :: ", random);
  return random

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
