class UI{
    constructor(_collection){
        this.collection = _collection;
        this.tbody = document.getElementById("tbody");
    }

    generateTable(){
        this.tbody.innerHTML = "";
        for(let item of this.collection.collection){
            let row = this.generateRow(item);
            this.tbody.appendChild(row);
        }
    }

    generateRow(item){
        let row = document.createElement("tr");
        for(let val of item.getValues()){
            let cell = this.generateCell(val);
            row.appendChild(cell);
        }
        return row
    }

    generateCell(val){
        let cell = document.createElement("td");
        cell.textContent = val;
        return cell;
    }
}

export {UI}