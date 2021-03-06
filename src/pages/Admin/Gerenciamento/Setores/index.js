import React, { Component } from 'react';

import AdminRightDiv from '../../../../components/Admin/RightDiv';
import AdminPageTitle from '../../../../components/Admin/Title';
import Deck from '../../../../components/Admin/Deck';
import AdminGerenciamentoForm from '../../../../components/Admin/Gerenciamento/Form';
import './style.css';

export default class GerenciamentoSetores extends Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target); // ???
  };

  render() {
    return (
      <AdminRightDiv>
        <AdminPageTitle comment="comentário">Setores</AdminPageTitle>
        <AdminGerenciamentoForm
          handleSubmit={this.handleFormSubmit}
          buttonChildren={[
            <>
              Criar novo setor
              <i className="fas fa-plus" />
            </>,
            <>
              Insira os dados do setor
              <i className="fas fa-arrow-down" />
            </>,
          ]}
          inputForm={[
            {
              label: 'Nome do setor',
              id: 'nome',
              tipo: 'text',
              placeholder: 'insira o nome do setor',
            },
            {
              label: 'Telefone',
              id: 'tele',
              tipo: 'number',
              placeholder: 'Insira o telefone principal do setor',
            },
            {
              label: 'Email',
              id: 'email',
              tipo: 'email',
              placeholder: 'Insira o email do setor',
            },
          ]}
        />

        <AdminGerenciamentoForm
          handleSubmit={this.handleFormSubmit}
          buttonChildren={[
            <>
              Editar Setor
              <i className="fas fa-plus" />
            </>,
            <>
              Porque não editar diretamente no setor escolhido?
              <i className="fas fa-arrow-down" />
            </>,
          ]}
          inputForm={[
            {
              label: 'Nome do setor',
              id: 'nome',
              tipo: 'text',
              placeholder: 'insira o nome do setor',
            },
          ]}
        />

        <AdminGerenciamentoForm
          handleSubmit={this.handleFormSubmit}
          buttonChildren={[
            <>
              Remover Setor
              <i className="fas fa-plus" />
            </>,
            <>
              Insira o nome do Setor
              <i className="fas fa-arrow-down" />
            </>,
          ]}
          inputForm={[
            {
              label: 'Nome do setor',
              id: 'nome',
              tipo: 'text',
              placeholder: 'insira o nome do setor',
            },
          ]}
        />

        <Deck
          cards={[
            { info: { title: 'titulo', chamados: '1000' }, url: '/admin/gerenciamento/setor' },
            { info: { title: 'titulo', chamados: '1000' }, url: '/admin/gerenciamento/setor' },
            { info: { title: 'titulo', chamados: '1000' }, url: '/admin/gerenciamento/setor' },
            { info: { title: 'titulo', chamados: '1000' }, url: '/admin/gerenciamento/setor' },
            { info: { title: 'titulo', chamados: '1000' }, url: '/admin/gerenciamento/setor' },
          ]}
        />
      </AdminRightDiv>
    );
  }
}
