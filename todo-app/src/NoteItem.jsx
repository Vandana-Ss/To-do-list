import React from "react";

function NoteItem({note, onDelete}){
    return (
        <li style={{
          marginBottom: '10px',
          listStyleType: 'none',
          backgroundColor: '#f9f9f9',
          padding: '10px',
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>{note}</span>
          <button 
            onClick={onDelete} 
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </li>
      );
      
}

export default NoteItem;