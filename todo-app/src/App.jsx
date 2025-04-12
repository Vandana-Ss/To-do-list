import { useState, useEffect } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function App(){
  const [notes, setNotes] = useState(() =>{
    const stored = localStorage.getItem('notes');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div style={{
      backgroundColor: '#f4f4f4',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',
       boxSizing: 'border-box'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '90%',
        maxWidth: '500px',
        textAlign: 'center'
       
      }}>
        <h2>📝 My Notes</h2>
        <NoteInput onAdd={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} />
      </div>
    </div>
  );
  
  
}

export default App;
