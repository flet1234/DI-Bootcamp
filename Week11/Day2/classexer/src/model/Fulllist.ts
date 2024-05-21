import ListItem from "./ListItem";

interface List {
    list: ListItem[]
    clearList():void
    addItem(item: ListItem): void
    removeItem(id:string): void
    save():void
    load():void
}

export default class FullList implements List {
    private _list: ListItem[]=[]

    constructor(list: ListItem[]=[]){
        this._list=list
    }

    get list(): ListItem[]{
        return this._list
    }

    clearList(): void {
        this._list=[]
        this.save()
    }
    addItem(item: ListItem): void {
        this._list.push(item)
        this.save()
    }
    removeItem(id: string): void {
        this._list = this._list.filter((item)=> item.id !== id)
        this.save()
    }
    save(): void {
        window.localStorage.setItem('list', JSON.stringify(this._list))
    }
    load(): void {
        
        const list:{_id:string,_item:string,_checked:boolean}[] = JSON.parse(window.localStorage.getItem('list')!) || []
        list.forEach((item)=> {
            this.addItem(new ListItem(item._id,item._item,item._checked))
        })
    }
}