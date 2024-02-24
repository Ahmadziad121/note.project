import React, { useState } from 'react';
import './App.css';


const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [reminder, setReminder] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    addNote({ title, body,createdAt:new Date().toISOString(),reminder, });
    setTitle('');
    setBody('');
    setReminder('')
  };

  return (<div className='form'>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <textarea placeholder="Write your daily note" value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
      <input type="text" placeholder="Reminder" value={reminder} onChange={(e) => setReminder(e.target.value)}/>

      <button type="submit">Add Note</button>
    </form></div>
  );
};

export default NoteForm;