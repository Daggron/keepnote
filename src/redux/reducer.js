import reduxConstantsMap from "../constants/reduxConstantsMap";

function NotesReducer(state = [], action) {
  switch(action.type) {
    case reduxConstantsMap.ADDNOTE:
      return [
        ...state,
        ...action.value,
      ];
    default: return state
  }
}

export default NotesReducer;