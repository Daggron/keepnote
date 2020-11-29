import connect from './mongoDb';

export const getAllNotes = async () => {
  const { db } = await connect();
  try {
    const notes = await db.collection('notes').find({}).toArray();
    return notes;
  } catch(err) {
    console.log(err);
    return err;
  }
}

export const getNotesById = async (id) => {
  const { db } = await connect();
  try {
    const note = await db.collection('notes').findOne({id});
    return note;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const deleteNoteById = async (id) => {
  const { db } = await connect();

  try {
    const resposne = await db.collection('notes').deleteNoteById(id);
    return resposne;
  } catch(error) {
    console.log(error);
    return error;
  }
}