const { AddNote } = require("../redux/actions")

export function createNotesState() {
  return function(dispatch) {
    return fetch('/api/getNotes')
    .then(res => res.json())
    .then(({ notes }) => {
      dispatch(AddNote(notes));
    })
    .catch(err => {
      console.log(err)
      return err;
    })
  }
}

export function AddCreatedNote(title, description, isPinned, isArchived) {
  return (dispatch) => {
    return fetch('/api/createNote',{
      method: 'POST',
      body: JSON.stringify({title, description, isPinned, isArchived}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(() => {
      dispatch(AddNote([{title, description, isPinned, isArchived}]));
    })
    .catch(err => {
      console.log(err);
      return err;
    })
  }
}