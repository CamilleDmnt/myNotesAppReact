import React, { useState } from 'react';

export default function AddNoteForm({onAddNote}) {
    const [inputValue,  setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        if (!inputValue.trim()) return; // Ne pas ajouter une note vide
        onAddNote(inputValue);
        setInputValue(''); // effacer l'input après l'ajout de la note
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            id="new"
            type="text"
            placeholder="Ecrivez votre note ..."
            value= {inputValue}
            onChange= {handleInputChange}
            /> 
        </form>
    );
}