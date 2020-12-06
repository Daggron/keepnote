import React from 'react'
import Note from '../Notes'

export default function NotesCreator({ notes }) {
  return (
    <div className="flex-like-banner p16">
      {
        notes.map((note) => (
          <Note note={note} />
        ))
      }
    </div>
  )
}
