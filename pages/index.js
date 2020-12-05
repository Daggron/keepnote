import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotesCreator from '../src/components/NotesCreator/NotesCreator';
import { AddNote } from '../src/redux/actions';
import Home from '../src/scenes/Home/Home';
import { createNotesState } from '../src/utils/actionCreator';

const Index = () => {
  const notes = useSelector(_state => _state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createNotesState());
  },[]);

  if (notes.length === 0) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
     <Home />
     <NotesCreator notes={notes} />
    </div>
  );
}

export default Index;