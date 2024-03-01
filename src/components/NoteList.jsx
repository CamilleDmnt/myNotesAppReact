// Il ne faut pas oublier de mettre les bouts de Js en paramètres de la fonction 

export default function NoteList({ notes, filterText, onRemoveBtn }) {

    // Filtrer les notes en fonction du texte filtré
    const filteredNotes = filterText ? notes.filter(note =>
        note.text.toLowerCase().includes(filterText.toLowerCase())
    ) : notes

    // Générer les éléments LI pour chaque note filtrée
    const listNotes = filteredNotes.map((note, index) => (
        <li key={index}>
            {note.text}
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => onRemoveBtn(note)}>🗑</button>
        </li>
    ));

    return (
        <>
            <h2>Liste de vos notes 📓</h2>
            <ul>{listNotes}</ul>
        </>
    );
}