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

    return(
      <div>
        <span>{value}</span>
        <button onClick={this.handleIncrement}> Increment by {step} </button>
        <button onClick={this.handleDecriment}> Decriment by {step} </button>
      </div>
    )
    
  }

}
