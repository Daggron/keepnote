import reduxConstantsMap from "../constants/reduxConstantsMap"

function AddNote(value) {
  return {
    type: reduxConstantsMap.ADDNOTE,
    value,
  }
}

export {
  AddNote,
}