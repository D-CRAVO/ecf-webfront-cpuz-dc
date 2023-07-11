import {Collection} from "./Collection.js"
import {UI} from "./UI.js"
import {Event} from "./Event.js"

let cpuzCollection = new Collection();
Event.collection = cpuzCollection;

await cpuzCollection.getCollection();

let ui = new UI(cpuzCollection);
ui.generateTable();
ui.generateNbCpuz();

document.getElementById("price").addEventListener("click", (e)=>{
    Event.sortColumn(e);
    ui.generateTable();
})

document.getElementById("search").addEventListener("input", (e)=>{
    Event.search(e);
    ui.generateTable();
    ui.generateNbCpuz();
})
