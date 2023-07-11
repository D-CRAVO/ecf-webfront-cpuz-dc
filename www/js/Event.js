class Event{
    static collection;
    static sortDirection = true;

    static sortColumn(e){
        Event.collection.sortCollection(e.target.dataset.name, Event.sortDirection);
        Event.sortDirection = !Event.sortDirection;
    }
}

export {Event}