import http from 'http';
import request from 'request';
import Response from './app/helpers/Responses.helper';
import Logger from './app/helpers/Logger.helper';

import {
	consultarTabelas,
	consultarMarcas,
	consultarModelos,
	consultarAnoModelo,
	consultarValorVeiculo
} from './app/routes';

const server = http.createServer();
const apiUrl = '/api/fipe/consulta';
const port = 1235;

server.on('request', async (req, res) => {
	const {headers, method, url} = req;
	
	// Log all requests
	// Logger(req, 'dev');

	// Ignoring all requests outside the predefined host
	if ( headers.host !== 'localhost:1235' ) return Response(res, 400, 'Requisições fora do host localhost:1234 estão desabilitadas.');

	// Ignoring methods that are not GET
	if ( method !== 'GET' && method !== 'POST' ) return Response(res, 400, 'Somente requisições GET/POST são permitidas!');

	// Defining allowed paths
	let allowedPaths = new Map([
		[`${apiUrl}/tabelas`, consultarTabelas],
		[`${apiUrl}/marcas`, consultarMarcas],
		[`${apiUrl}/modelos`, consultarModelos],
		[`${apiUrl}/anoModelo`, consultarAnoModelo],
		[`${apiUrl}/valorVeiculo`, consultarValorVeiculo]
	]);

	// Validating allowed paths
	if ( !allowedPaths.get(url) ) return Response(res, 404, 'URL não encontrada.');
	return allowedPaths.get(url)(request, req, res);
});

server.listen(port, () => {
	console.log(`\r\nServer is listening on port ${port}\r\n`)
});