class Event{
    static collection;
    static sortDirection = true;

    static sortColumn(e){
        Event.collection.sortCollection(e.target.dataset.name, Event.sortDirection);
        Event.sortDirection = !Event.sortDirection;
    }

    static search(e){
        Event.collection.searchCollection(e.target.value);
    }
}

export {Event}