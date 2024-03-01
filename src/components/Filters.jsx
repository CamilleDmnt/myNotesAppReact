export default function Filters({onFilterChange}) {
    const handleInputChange = (e) => {
        //cela met à jour l'état du filtre avec la valeur de l'input
        onFilterChange(e.target.value);
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