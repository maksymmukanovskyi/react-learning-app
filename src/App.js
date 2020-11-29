import React, {Component} from 'react';
export default class App extends Component{
  static defaultProps = {
    step: 1,
    initValue: 55,
  };

  state = {
    value: this.props.initValue,
  }

  handleIncrement = () => {
    this.setState((prevState, props) => ({
      value: prevState.value + props.step,
    }))
  }

  handleDecriment = () => {
    this.setState((prevstate, props) => ({
      value: prevstate.value - props.step,
    }))
  }

  render() {
    const {value} = this.state;
    const {step} = this.props;

    
  }

}
