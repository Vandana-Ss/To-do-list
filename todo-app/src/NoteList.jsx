import NoteItem from "./NoteItem";

function NoteList({notes, onDelete}){
    return (
        <ul style={{ padding: 0, marginTop: '20px' }}>
        {notes.map((note, index) => (
          <NoteItem 
            key={index}
            note={note}
            onDelete={() => onDelete(index)}
          />
        ))}
      </ul>
      
    );
}

export default NoteList;