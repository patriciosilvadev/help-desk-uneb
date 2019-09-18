/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';

import TableContext from '../../components/Table/Context';
import Table from '../../components/Table';
import MainHeader from '../../components/Main/Header';
import LargeBox from '../../components/LargeBox';
import Footer from '../../components/Footer';
import ErrorAlert from '../../components/ErrorAlert';
// import HistoricoMovimentacao from '../../components/HistoricoChamado';

import './style.css';

export default class VisualizarChamado extends Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id },
      },
    } = props;
    this.state = {
      id,
      animate: false,
      payload: null,
      error: '',
      baseURL: api.defaults.baseURL,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    const {
      location: { state },
    } = this.props;
    if (state && state.payload) {
      const { payload } = state;
      this.setState({ payload });
    } else {
      api
        .post('/chamado/read.php', { id })
        .then((res) => {
          const { data } = res;
          // console.log(data);
          if (!data.error) {
            this.setState({ payload: data });
          } else {
            this.setState({ error: data.mensagem });
          }
        })
        .catch(() => {
          this.setState({ error: 'Erro no servidor' });
        });
    }
    setTimeout(() => {
      this.setState({ animate: true });
    }, 50);
  }

  render() {
    const {
      id, animate, payload, error, baseURL,
    } = this.state;
    console.log(payload);
    return (
      <>
        <MainHeader />
        <div id="consultar-chamado" style={{ opacity: animate ? 1 : 0 }}>
          {error ? (
            <ErrorAlert>{error}</ErrorAlert>
          ) : payload ? (
            <>
              <p className="consultar-chamado-title">
                Chamado
                {`    #${id}`}
              </p>
              <LargeBox style={{ width: '95%' }}>
                <p>
                  <strong>Solicitante:</strong>
                  {` ${payload.usuario.nome}`}
                </p>
                <p>
                  <strong>Situação:</strong>
                  {` ${payload.alteracoes[payload.alteracoes.length - 1].situacao.nome}`}
                </p>
                <p>
                  <strong>Descrição:</strong>
                  {` ${payload.descricao}`}
                </p>
                <p>
                  <strong>Data de Abertura:</strong>
                  {` ${payload.alteracoes[0].data}`}
                </p>
                {payload.problema ? (
                  <p>
                    <strong>Problema:</strong>
                    {`${payload.problema.descricao}`}
                  </p>
                ) : null}
                <p>
                  <strong>Setor:</strong>
                  {` ${payload.setor.nome}`}
                </p>
                {payload.arquivo && (
                  <center>
                    <a
                      href={`${baseURL}/${payload.arquivo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt={`Anexo do chamado ${payload.id}`}
                        title={`Anexo do chamado ${payload.id}`}
                        className="chamado"
                        src={`${baseURL}/${payload.arquivo}`}
                      />
                    </a>
                  </center>
                )}
                {payload.alteracoes ? (
                  <div>
                    <br />
                    <TableContext.Provider value={{}}>
                      <Table
                        title="Histórico de Movimentações"
                        head={['Situação', 'Descrição', 'Data']}
                        columnSortKey={2}
                        dateFields={[2]}
                        rows={payload.alteracoes.map((ele) => {
                          const {
                            situacao: { nome: situacaoNome },
                            descricao,
                            data,
                          } = ele;
                          return [situacaoNome, descricao, data, {}];
                        })}
                      />
                    </TableContext.Provider>
                  </div>
                ) : null}
              </LargeBox>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

VisualizarChamado.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
