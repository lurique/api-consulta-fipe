const BodyParser = async (req) => {
  let body = '';
  
  await req.on('data', chunk => {
    body += chunk.toString();
  });

  return body;
}

export default BodyParser;