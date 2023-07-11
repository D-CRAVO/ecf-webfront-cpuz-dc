class Item{
    /**
     * 
     * Constructeur
     * Initialise les données de la classe
     * @param {Item} item 
     */
    constructor(item){
        Object.assign(this, item);
        this.completeName = this.determinateCompleteName(item);
    }

    /**
     * Retourne les valeurs de l'objet
     * @returns Les valeurs de l'objet
     */
    getValues(){
        return Object.values(this);
    }

    /**
     * Determine le nom complet des cpuz
     * @param {Item} item 
     * @returns le nom déterminé
     */
    determinateCompleteName(item){
        return `${item.brand} ${item.family} ${item.model}`
    }
}

export {Item}