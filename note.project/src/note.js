import React, { useState } from 'react';
import './App.css';


const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [reminder, setReminder] = useState('');
  const max_title_length=30;
  const max_body_length=200;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    addNote({ title :title.substring(0,max_title_length), body :body.substring(0,max_body_length),
      createdAt:new Date().toISOString(),reminder, });
    setTitle('');
    setBody('');
    setReminder('')
  };

  return (<div className='form'>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} required onChange={(e) => setTitle(e.target.value)}
        maxLength={max_title_length}
      /><span id='title'>{title.length}/{max_title_length}</span>
      <textarea placeholder="Write your daily note" value={body} required onChange={(e) => setBody(e.target.value)}  maxLength={max_body_length} ></textarea>
      <span id='body'>{body.length}/{max_body_length}</span>
      <input type="text" placeholder="Reminder" value={reminder} required onChange={(e) => setReminder(e.target.value)}/>

      <button className='sub' type="submit">Add Note</button>
    </form></div>
  );
};

export default NoteForm;