import React, { useState,useEffect } from 'react';
import NoteForm from './note';
import NoteList from './notes';
import './App.css';
import randomColor from 'randomcolor';

function App() {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  
  useEffect(() => {
    
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

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
