import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './components/Counter'
import NoteList from './components/NoteList'
import Filters from './components/Filters'
import AddNoteForm from './components/AddNoteForm'


function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "première note" },
    { id: 2, text: "deuxième note" },
    { id: 3, text: "troisième note" }
  ]);
  
  //filterText = varible d'état
  //setFilterText = fonction pour mettre à jour l'état
  const[filterText, setFilterText] = useState('');

  // FONCTION POUR AJOUTER UNE NOTE
  const addNote = (text) => {
    const newNote = {
      // id: Date.now(), //génére la date comme id 
      text : text
    };
    setNotes (prevNotes => [... prevNotes, newNote]);
    console.log(newNote);
  }

  //FONCTION POUR SUPPRIMER UNE NOTE
  function onRemoveNoteBtnHandler(noteToDelete) {

    console.log('click on remove note', noteToDelete);

    //on garde toutes les notes qui ne sont pas celle à supprimer
    const newNote = notes.filter(note => note.id !== noteToDelete.id);
    setNotes(newNote); //mis à jour des notes
  }

  // Fonction pour gérer le  filtre de note
  const handleFilterChange = (newFilterText) => {
    setFilterText(newFilterText);
  }

  // LA VUE
  return (
    <>
      <h1> Application Notes 📋</h1>

      <AddNoteForm onAddNote={addNote} />

      <Counter totalNotes={notes.length} />
      
      {/* Passer la fonction de mise à jour de l'état du filtre */}
      <Filters filterText={filterText} onFilterChange={handleFilterChange} /> 

      {/* Passer filterText en tant que prop à NoteList */}
      <NoteList notes={notes} onRemoveBtn={onRemoveNoteBtnHandler} />
    </>
  )
}

export default App
