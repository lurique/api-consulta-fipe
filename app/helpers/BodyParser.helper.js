const BodyParser = async (req) => {
  if ( req.method !== 'POST' ) return Response(res, 401, 'Método não permitido.', []);

  let body = '';
  
  await req.on('data', chunk => {
    body += chunk.toString();
  });

  return body;
}

export default BodyParser;