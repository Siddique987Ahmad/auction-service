// exports.hello = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v4.0! Your function executed successfully!'
//     })
//   };
// };

async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Go Serverless v4.0! Your function executed successfully!'
    }),
  };
}

export const handler = hello;