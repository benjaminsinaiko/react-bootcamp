/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny
          bangs={4}
          img="http://cdn.akc.org/content/hero/westiehero.jpg"
        />
        <Hello to="Britney" from="Adele" bangs={10} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
