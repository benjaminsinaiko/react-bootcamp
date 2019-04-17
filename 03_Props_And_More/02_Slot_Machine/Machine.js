/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;
    return (
      <div>
        <p>
          {s1} {s2}
          {s3}{' '}
        </p>
        <p>{winner ? 'You win!' : 'You lose...'}</p>
      </div>
    );
  }
}
