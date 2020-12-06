import React, {Component} from 'react';

export default class NoteEditor extends Component{
    state={
        text: "",
    };

    handleChange = ({target: {name, value}}) => {
        // const {name, value} = target;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state)
        this.props.onSubmit(this.state.text)
        this.reset();
    }

    reset = () => {
        this.setState({
            text: '',
        })
    }
 
    render(){
        const {text} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <input autoFocus autoComplete="off" type="text" name="text" value={text} onChange={this.handleChange}/>
                <button>Add text</button>
            </form>
        )

    }
}