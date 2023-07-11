class Event{
    static collection;
    static sortDirection = true;

    /**
     * Demande le tri des colonnes à la classe Collection
     * @param {Event} e 
     */
    static sortColumn(e){
        Event.collection.sortCollection(e.target.dataset.name, Event.sortDirection);
        Event.sortDirection = !Event.sortDirection;
    }

    /**
     * Demande la recherche à la classe Collection
     * @param {Event} e 
     */
    static search(e){
        Event.collection.searchCollection(e.target.value);
    }
}

export {Event}