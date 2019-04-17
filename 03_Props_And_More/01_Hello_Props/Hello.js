/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
class Hello extends React.Component {
  render() {
    return (
      <p>
        Hi {this.props.to} from {this.props.from}
      </p>
    );
  }
}
