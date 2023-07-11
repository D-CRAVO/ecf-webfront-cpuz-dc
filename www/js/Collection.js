import { Db } from "./Db.js";
import { Item } from "./Item.js";

class Collection{
    constructor(){
        this.collection = [];
        this.collectionWork = [];
        this.source = "/cpuz.json"
    }

    async getCollection(){
        let data =  await Db.fetchData(this.source);
        console.log(data);
        this.collection = data;
        this.collection = this.collection.map(i=>new Item(i));
        this.collectionWork = Array.from(this.collection)
    }

    sortCollection(name, sortDirection){
        this.collection.sort((a,b) => a[name] - b[name]);
        if (!sortDirection){
            this.collection.reverse();
        }
    }
}

export {Collection}