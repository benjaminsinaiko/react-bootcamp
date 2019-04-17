/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Elton" hobbies={['Piano', 'Singing', 'Dancing']} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
