import React, { useState } from 'react';
import NoteForm from './note';
import NoteList from './notes';
import './App.css';
import randomColor from 'randomcolor';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, {...note,color:randomColor()}]);

  };

  const removeNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm addNote={addNote} />
     <div className='rem'> <NoteList notes={notes} removeNote={removeNote} /></div>
    </div>
  );
}

export default App;
