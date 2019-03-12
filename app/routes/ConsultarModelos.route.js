import Response from '../helpers/Responses.helper';
import BodyParser from '../helpers/BodyParser.helper';

const consultarModelosDosVeiculos = async (fetch, req, res) => {
  let body = await BodyParser(req);

  let options = {
    method: 'POST',
    url: 'http://veiculos.fipe.org.br/api/veiculos/ConsultarModelos',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'http://veiculos.fipe.org.br',
      'Host': 'veiculos.fipe.org.br'
    },
    form: JSON.parse(body)
  }

  await fetch(options, (error, response, body) => {
    if (error) return Response(res, 400, 'Ocorreu um erro ao listar os modelos de veículos. Tente novamente mais tarde.', JSON.parse(error));
    return Response(res, 200, 'Modelos listados com sucesso!', JSON.parse(body).Modelos);
  });
}

export { consultarModelosDosVeiculos as consultarModelos }