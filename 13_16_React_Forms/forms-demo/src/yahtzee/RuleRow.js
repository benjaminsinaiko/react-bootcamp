import React, { Component } from 'react'
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { score, name } = this.props
    const disabled = score !== undefined
    return (
      <tr
        className={`RuleRow RuleRow-${disabled ? 'disabled' : 'active'}`}
        onClick={disabled ? null : this.props.doScore}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    )
  }
}

export default RuleRow
