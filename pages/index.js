import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNotesState } from '../src/utils/actionCreator';

const Home = () => {
  const notes = useSelector(_state => _state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createNotesState());
  },[]);

  console.log(notes);

  if (notes.length === 0) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(notes, null, 2)}
        </code>
      </pre>
    </div>
  );
}

export default Home;