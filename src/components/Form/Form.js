import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCreatedNote } from '../../utils/actionCreator';
import style from './Form.module.css';

export default function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [isArchived, setIsArchived] = useState(false);

  const dispatch = useDispatch();
  
  const handleTitleChange = (e) => {
    const { target: {value} } = e;
    setTitle(value);
  }

  const handleDescriptionChange = (e) => {
    const { target: {value} } = e;
    setDescription(value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(AddCreatedNote(title, description, isPinned, isArchived));
  }

  return (
    <form
      method="POST"
      className={`form ${style.formContainer} ${showDescription ? 'h96' : 'h24'}`}
      onSubmit={onSubmit}
    >
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
      <button type="submit">
        Submit
      </button>
    </form>
  )
}
