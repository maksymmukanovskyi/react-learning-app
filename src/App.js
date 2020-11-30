import React, {Component} from 'react';
import StepChanger from './stepChanger'
export default class App extends Component{
  static defaultProps = {
    step: 1,
    initValue: 55,
  };

  state = {
    value: this.props.initValue,
    step: this.props.step,
  }
  handleAdd = () => {
    this.setState((prevState, props) => ({
      step: prevState.step + props.step,
    }))
  };

  handleSub = () => {
    this.setState((prevState, props) => ({
      step: prevState.step - props.step,
    }))
  };


  handleIncrement = () => {
    this.setState((prevState, props) => ({
      value: prevState.value + prevState.step,
    }))
  }

  handleDecriment = () => {
    this.setState((prevState, props) => ({
      value: prevState.value - prevState.step,
    }))
  }

  render() {
    const {value, step} = this.state;
    // const {step} = this.state;

    return(
      <div>
        <span>{value}</span>
        <button onClick={this.handleIncrement}> Increment by {step} </button>
        <button onClick={this.handleDecriment}> Decriment by {step} </button>
        <StepChanger
         onAdd={this.handleAdd}
         onSub={this.handleSub}
         amount={this.state.step}
        />
      </div>
    )
    
  }

}
