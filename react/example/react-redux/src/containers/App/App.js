import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {add} from './../../redux/modules/counter';
import Counter from './../../components/Counter/Counter';

const mapStateToProps = (state) => ({
  counterValue: state.counter
});
const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(add())
});

// @connect(mapStateToProps, mapDispatchToProps)
export class App extends Component {
  static propTypes = {
    counterValue: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired
  };

  render() {
    const {add, counterValue} = this.props;
    return (
      <div>
        <h1>Hello World</h1>
        <Counter add={add} value={counterValue} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
