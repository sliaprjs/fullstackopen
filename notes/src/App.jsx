import { useState, useEffect } from "react";
import axios from 'axios';

import Note from "./components/Note"

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('New note');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/notes').then(response => {
      console.log('Fullfilled');
      setNotes(response.data);
    })
  }, [])

  const addNote = (e) => {
    e.preventDefault();

    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObj));
    setNewNote('');
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note}/>)}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange}/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App
