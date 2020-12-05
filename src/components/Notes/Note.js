import React from 'react';
import Style from './Note.module.css';

export default function Note({ note, togglePin, toggleArchive, onDelete }) {
  return (
    <div className={`${Style.container} mr16`}>
      <p className="text-14 mb4">
        { note.title }
      </p>
      <p className="text-13 mb8">
        { note.description }
      </p>
    </div>
  )
}