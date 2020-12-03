import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddNote } from '../src/redux/actions';
import Home from '../src/scenes/Home/Home';
import { createNotesState } from '../src/utils/actionCreator';

const Index = () => {
  const notes = useSelector(_state => _state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createNotesState());
    // console.log(data);
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
    </div>
  );
}

export default Index;