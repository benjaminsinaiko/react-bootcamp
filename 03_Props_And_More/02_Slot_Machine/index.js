/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot Machines!</h1>
        <Machine s1="🍒" s2="🍑" s3="🍓" />
        <Machine s1="🍉" s2="🍉" s3="🍉" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
