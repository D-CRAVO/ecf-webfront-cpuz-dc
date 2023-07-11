class Item{
    constructor(item){
        Object.assign(this, item);
        this.completeName = this.determinateCompleteName(item);
    }

    getValues(){
        return Object.values(this);
    }

    determinateCompleteName(item){
        return `${item.brand} ${item.family} ${item.model}`
    }
}

export {Item}