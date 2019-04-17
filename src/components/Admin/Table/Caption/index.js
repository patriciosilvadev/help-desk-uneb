import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class TableCaption extends Component {
  componentDidMount() {
    const { orderingColors } = this.props;
    const captionBoxes = document.querySelectorAll('ul.table-caption li div');
    for (let i = 0; i < captionBoxes.length; i += 1) {
      captionBoxes[i].style.background = orderingColors[i];
    }
  }

  render() {
    return (
      <ul className="table-caption">
        <li>
          <div />
          descendente
        </li>
        <li>
          <div />
          ascendente
        </li>
        <li>
          <div />
          padrão
        </li>
      </ul>
    );
  }
}

TableCaption.propTypes = {
  orderingColors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
