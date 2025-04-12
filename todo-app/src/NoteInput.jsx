import React, { useState } from "react";

function NoteInput({onAdd}){
    const [note, setNote] = useState('');

    const handleAdd = () => {
        if(note.trim() !== ''){
            onAdd(note);
            setNote('');
        }
    }

    return (
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <input 
            placeholder="Enter a note" 
            type="text" 
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{
              padding: '10px',
              width: '70%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginRight: '10px'
            }}
          />
          <button 
            onClick={handleAdd}
            style={{
              padding: '10px 15px',
              borderRadius: '5px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Add
          </button>
        </div>
      );
      
}

export default NoteInput;