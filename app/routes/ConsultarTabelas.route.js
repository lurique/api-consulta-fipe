import SuccessResponse from '../helpers/Success.helper';

const consultarTabelasDeReferencia = (fetch, req, res) => {
  let options = {
    method: 'POST',
    url: 'http://veiculos.fipe.org.br/api/veiculos/ConsultarTabelaDeReferencia',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'http://veiculos.fipe.org.br',
      'Host': 'veiculos.fipe.org.br'
    }
  };

  fetch(options, (error, response, body) => {
    if (error) return ErrResponse(res, 400, 'Ocorreu um erro ao listar as tabelas de referência. Tente novamente mais tarde.', JSON.parse(error));
    return SuccessResponse(res, 200, 'Tabelas de Referência listadas com sucesso!', JSON.parse(body));
  });
}

export { consultarTabelasDeReferencia as consultarTabelas }