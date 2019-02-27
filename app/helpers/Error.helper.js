const ErrResponse = (res, statusCode, message, body) => {
  let messageObject = {
		status: statusCode,
		message: message,
		data: body
	}

	res.writeHead(statusCode, {'Content-Type': 'text/json'});
	res.write(JSON.stringify(messageObject));
	res.end();
}

export default ErrResponse;