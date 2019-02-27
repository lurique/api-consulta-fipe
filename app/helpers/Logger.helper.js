const fs = require('fs');

const Logger = (req, env) => {
  if ( !env ) env = 'dev';

  const { headers, method, url, body } = req;

  let log = {
    'headers': headers,
    'method': method,
    'url': url,
    'body': !body ? null : body
  }

  let stringLog = JSON.stringify(log);
  
  // Log request content directly into machine interface
  console.log(log);

  if ( env === 'production' ) {
    // Log into a reserved file, preventing data loss
    fs.appendFile('./logs/requests.log', `${stringLog},\r\n`, (err) => {
      if ( err ) return console.log('Unable to save the last requested log.');
    });
  }
}

export default Logger;