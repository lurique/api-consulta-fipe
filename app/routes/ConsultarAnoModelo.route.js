import Response from '../helpers/Responses.helper';
import BodyParser from '../helpers/BodyParser.helper';

const consultarAnoModeloDosVeiculos = async (fetch, req, res) => {
  let body = await BodyParser(req);

  let options = {
    method: 'POST',
    url: 'http://veiculos.fipe.org.br/api/veiculos/ConsultarAnoModelo',
    headers: { 
      'Content-Type': 'application/json',
      'Referer': 'http://veiculos.fipe.org.br',
      'Host': 'veiculos.fipe.org.br'
    },
    form: JSON.parse(body)
  }
    
  await fetch(options, (error, response, body) => {
    if (error) return Response(res, 400, 'Ocorreu um erro ao listar os anos/modelos do veículo. Tente novamente mais tarde.', JSON.parse(error));
    return Response(res, 200, 'Ano modelo listados com sucesso!', JSON.parse(body));
  });
}

export { consultarAnoModeloDosVeiculos as consultarAnoModelo }