import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCreatedNote } from '../../utils/actionCreator';
import IcoButton from './dumb-component/ico-buttons';
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
    <div className={style.container}>
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
            <>
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Description..."
              />
              <div className="flex-apart">
                <div>
                  {
                    isPinned ? (
                      <IcoButton src="pinned.svg" title="Unpin note" alt="unpin button" className={`${style.icoButton}`}/>
                    ) : (
                      <IcoButton src="pin.svg" title="Pin note" alt="pin button" className={`${style.icoButton}`}/>
                    )
                  }
                  {
                    isArchived ? (
                      <IcoButton src="acrhived.svg" title="Unarchive note" alt="unarchive button" className={`${style.icoButton}`}/>
                    ) : (
                      <IcoButton src="unarchive.svg" title="archive note" alt="archive button" className={`${style.icoButton}`}/>
                    )
                  }
                </div>
                <div>
                  <button type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </>
          ) : (
            null
          )
        }
      </form>
    </div>
  )
}
