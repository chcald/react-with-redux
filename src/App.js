import React from "react";
import "./App.css";
import { connect } from "react-redux";

const App = ({ age, onAgeUp, onAgeDown }) => {
  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{age}</span>
      </div>
      <button onClick={onAgeUp}>Age UP</button>
      <button onClick={onAgeDown}>Age Down</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
