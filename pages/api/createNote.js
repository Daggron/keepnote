import { addNoteToDb } from "../../src/utils/notes";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(400).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { title, description, isPinned, isArchived } = req.body;
    const createdNote = await addNoteToDb(title, description, isPinned, isArchived);
    return res.status(200).json({ success: true, error: null, notes: createdNote })
  } catch(err) {
    console.log(err);
    return res.status(500).json({success: false, error: 'Internal server error'});
  }
}