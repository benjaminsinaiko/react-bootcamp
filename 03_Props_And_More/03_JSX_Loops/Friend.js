/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map(hobby => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}
