const apiMap = {
  CREATENOTE: '/api/createNote',
  GETNOTE: '/api/getNotes',
}

const apiErrorMap  = {
  CREATENOTE: "Yikes your note couldn't be posted. Please try again.",
  GETNOTE: "Yikes couldn't fetch notes."
}

export {
  apiMap,
  apiErrorMap
}