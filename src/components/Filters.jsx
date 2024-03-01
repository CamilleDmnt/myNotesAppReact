export default function Filters({onFilterChange}) {
    const handleInputChange = (event) => {
        const newText = event.target.value;
        // Appel de la fonction de filtrage des notes
        onFilterChange(newText);
        
    };

    return (
        <input
            id="filter"
            placeholder="Recherchez une note 🔍" 
            // appel de const lorqsque la valeur de l'input change
            onChange={handleInputChange}
        />
    );
}