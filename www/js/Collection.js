import { Db } from "./Db.js";
import { Item } from "./Item.js";

class Collection{
    /**
     * Constructeur
     * Initialise les données de la classe
     */
    constructor(){
        this.collection = [];
        this.collectionWork = [];
        this.source = "/cpuz.json"
    }

    /**
     * Chargement des données
     */
    async getCollection(){
        let data =  await Db.fetchData(this.source);
        console.log(data);
        this.collection = data;
        this.collection = this.collection.map(i=>new Item(i));
        this.collectionWork = Array.from(this.collection)
    }

    /**
     * Trie le tableau par ordre croissant ou décroissant
     * en fonction des paramètres envoyés depuis la classe Event
     * @param {String} name 
     * @param {Bool} sortDirection 
     */
    sortCollection(name, sortDirection){
        this.collection.sort((a,b) => a[name] - b[name]);
        if (!sortDirection){
            this.collection.reverse();
        }
    }

    /**
     * Effectue la recherche sur le nom complet des cpuz
     * en fonction des paramètres envoyés depuis la classe Event
     * @param {string} val 
     */
    searchCollection(val){
        let search = val.trim().toLowerCase()
        this.collection = this.collectionWork.filter(c => c.completeName.toLowerCase().includes(search))
    }

    /**
     * Calcule le nombre de cpuz affichés
     * @returns nombre de cpuz affichés
     */
    calculateNbCpuz(){
        return this.collection.length;
    }
}

export {Collection}