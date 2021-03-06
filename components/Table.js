'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    const rows = this.props.table.map((row, index) => {
      return <Row
              key={index}
              row={row}
              onChange={this.props.onChange.bind(null, index)}
              onFocus={this.props.onFocus.bind(null, index)}
                />
    })
    return (
      <table className='table' onBlur={this.props.onBlur}>
        <tbody>
          {rows}
          </tbody>
        </table>
    )
  }
}
