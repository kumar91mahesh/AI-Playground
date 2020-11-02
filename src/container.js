import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => {
  return {
    data: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    saveCode: (data) => dispatch({ type: 'CODE', data: data }),
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(App);