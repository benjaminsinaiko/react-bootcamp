/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable prefer-const */
class Hello extends React.Component {
  static defaultProps = {
    from: 'Anonymous',
    bangs: 1,
  }

  render() {
    let bangs = '!'.repeat(this.props.bangs);
    return (
      <div>
        <p>
          Hi {this.props.to} from {this.props.from}
          {bangs}
        </p>
      </div>
    );
  }
}
