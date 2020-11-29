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