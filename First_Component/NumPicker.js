/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h2>CONGRATS YOU WIN!</h2>
        </div>
      );
    } else {
      msg = <p>Sorry You Lose!</p>;
    }
    return (
      <div>
        <h1>Your Number is: {num}</h1>
        {msg}
      </div>
    );
  }
}
