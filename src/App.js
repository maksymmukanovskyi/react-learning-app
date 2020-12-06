import React, {Component} from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import v4 from 'uuid/dist/v4';
import NoteFilter from './NoteFilter';

const filterNotes = (notes, filter) => 
notes.filter(note => note.text.toLowerCase().includes(filter.toLowerCase()));

export default class App extends Component{
    state = {
        notes: [],
        filter: '',
    }
    handleFilterChange = e => {
        this.setState({
            filter: e.target.value
        })
    }

    handleAddNote = text => {
        this.setState((prevState) => ({
            notes: [{id: v4(), text}, ...prevState.notes]
        }))
    }

    handleDeleteNote = id => {
        this.setState((prevState) => ({
            notes: prevState.notes.filter(note => note.id !== id),
        }))
    }

    render() {
        const {notes, filter} = this.state;
        const filteredNotes = filterNotes(notes, filter);
        return(
        <div>
            <h1>Forms in React</h1>
            <NoteList notes={filteredNotes} onDeleteNote={this.handleDeleteNote}/>
            <NoteFilter filter={filter} onFilterChange={this.handleFilterChange}/>
            <NoteEditor onSubmit={this.handleAddNote}/>
        </div>
        )
    }
}