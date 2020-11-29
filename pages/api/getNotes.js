import { getAllNotes } from '../../src/utils/notes';

export default async function Handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(400).json({success: false, error: 'Method not allowed'});
  }
  try {
    const notes = await getAllNotes();
    return res.status(200).json({ success: true, error: null, notes })
  } catch {
    return res.status(502).json({success: false, error: 'Internal Server Error'});
  }
}