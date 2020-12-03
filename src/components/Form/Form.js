import React, { useState } from 'react';
import style from './Form.module.css';

export default function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  
  const handleTitleChange = (e) => {
    const { target: {value} } = e;
    setTitle(value);
  }

  const handleDescriptionChange = (e) => {
    const { target: {value} } = e;
    setDescription(value);
  }

  return (
    <form method="POST" className={`form ${style.formContainer} ${showDescription ? 'h96' : 'h24'}`}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        onClick={() => setShowDescription(true)}
        placeholder="Title..."
      />
      {
        showDescription ? (
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Description..."
          />
        ) : (
          null
        )
      }
    </form>
  )
}
