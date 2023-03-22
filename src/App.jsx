import React, { useState } from "react";
import { Header, Footer, CreateArea, Note } from './components/index'
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(update) {
    setNotes((prevNotes) => {
      return [...prevNotes, update];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItems, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
