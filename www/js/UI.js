class UI{
    /**
     * Constructeur
     * Initialise les données de la classe
     * @param {Collection} _collection 
     */
    constructor(_collection){
        this.collection = _collection;
        this.tbody = document.getElementById("tbody");
        this.footer = document.getElementById("nbCpuz");
    }

    /**
     * Génère le tbody à partir de la collection
     */
    generateTable(){
        this.tbody.innerHTML = "";
        for(let item of this.collection.collection){
            let row = this.generateRow(item);
            this.tbody.appendChild(row);
        }
    }

    /**
     * Génère une ligne
     * @param {Item} item 
     * @returns 
     */
    generateRow(item){
        let row = document.createElement("tr");
        for(let val of item.getValues()){
            let cell = this.generateCell(val);
            row.appendChild(cell);
        }
        return row
    }

    /**
     * Génère une cellule
     * @param {value} val 
     * @returns 
     */
    generateCell(val){
        let cell = document.createElement("td");
        cell.textContent = val;
        return cell;
    }

    /**
     * Génère le contenu de l'élément HTML avec l'id "nbCpuz"
     */
    generateNbCpuz(){
        this.footer.textContent = this.collection.calculateNbCpuz()
    }
}

export {UI}