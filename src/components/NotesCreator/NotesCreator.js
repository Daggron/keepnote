import React from 'react';
import Note from '../Notes';
import style from './NotesCreator.module.css';

export default function NotesCreator({ notes }) {
  return (
    <div className={`flex-like-banner ${style.container} p16`}>
      {
        notes.map((note) => (
          <Note note={note} key={note._id} />
        ))
      }
    </div>
  )
}
