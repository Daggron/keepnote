import { toast } from "react-toastify";
import { apiErrorMap, apiMap } from "../constants/apiMap";

const { AddNote } = require("../redux/actions");

const toastOptions = {
  error: {className: 'error'},
  success: {className: 'success'},
}

export function createNotesState() {
  return function(dispatch) {
    return fetch(apiMap.GETNOTE)
    .then(res => res.json())
    .then(({ notes }) => {
      dispatch(AddNote(notes));
    })
    .catch(err => {
      console.log(err)
      toast.error(apiErrorMap.GETNOTE, toastOptions.error);
      return err;
    })
  }
}

export function AddCreatedNote(title, description, isPinned, isArchived) {
  return (dispatch) => {
    return fetch(apiMap.CREATENOTE,{
      method: 'POST',
      body: JSON.stringify({title, description, isPinned, isArchived}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(() => {
      toast.success('Note added successfully', toastOptions.success);
      dispatch(AddNote([{title, description, isPinned, isArchived}]));
    })
    .catch(err => {
      console.log(err);
      toast.error(apiErrorMap.CREATENOTE, toastOptions.error);
      return err;
    })
  }
}