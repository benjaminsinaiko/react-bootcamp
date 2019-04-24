import React, { Component } from 'react'

class IconList extends Component {
  static defaultProps = {
    options: [
      'angry',
      'anchor',
      'archive',
      'at',
      'aarchway',
      'baby',
      'bell',
      'bolt',
      'bone',
      'car',
      'city',
      'cloud',
      'couch'
    ]
  }
  constructor(props) {
    super(props)
    this.state = { icons: [] }
  }

  addIcon = () => {
    let idx = Math.floor(Math.random() * this.props.options.length)
    let newIcon = this.props.options[idx]
    this.setState({ icons: [...this.state.icons, newIcon] })
  }

  render() {
    const icons = this.state.icons.map((i, index) => (
      <i key={index} className={`fas fa-${i}`} />
    ))
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    )
  }
}

export default IconList
