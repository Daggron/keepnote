import { useRouter } from 'next/router';
import React from 'react';
import Style from './Note.module.css';

export default function Note({ note, togglePin, toggleArchive, onDelete }) {
  const router = useRouter();

  const openNoteModal = () => {
    router.push(`#note-modal?id=${note._id}`)
  }
  return (
    <div className={`${Style.container} mr16`} onClick={openNoteModal}>
      <p className="text-14 mb4">
        { note.title }
      </p>
      <p className="text-13 mb8">
        { note.description }
      </p>
    </div>
  )
}