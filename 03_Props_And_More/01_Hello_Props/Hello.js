/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
class Hello extends React.Component {
  render() {
    const bangs = '!'.repeat(this.props.bangs);
    return (
      <div>
        <p>
          Hi {this.props.to} from {this.props.from}
          {bangs}
        </p>
        {this.props.img ? <img src={this.props.img} alt="westie" /> : null}
      </div>
    );
  }
}
