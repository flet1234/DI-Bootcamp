import FullList from "../model/Fulllist";

interface DOMList {
    ul:HTMLUListElement
    clear():void
    render(list:FullList):void
}

export default class ListTeamplate implements DOMList{
    ul:HTMLUListElement;

    constructor(){
        this.ul=document.getElementById('listItems') as HTMLUListElement
    }
    clear(): void {
        this.ul.innerHTML = ''
    }
    render(fullist: FullList): void {
        this.clear()
        fullist.list.forEach((item)=> {
            const li = document.createElement('li') as HTMLLIElement
            li.className = 'item'

            const checkbox = document.createElement('input') as HTMLInputElement
            checkbox.type = 'checkbox'
            checkbox.id = item.id
            checkbox.checked = item.checked
            li.appendChild(checkbox)

            checkbox.addEventListener('change', ()=> {
                item.checked = !item.checked
            })

            const label = document.createElement('label') as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent =item.item
            li.appendChild(label)

            const button = document.createElement('button') as HTMLButtonElement
            button.textContent = 'X'
            button.className = 'button'
            li.appendChild(button)

            button.addEventListener('click', ()=>{
                fullist.removeItem(item.id)
                this.render(fullist)
            })
            this.ul.appendChild(li)
        })
    }
}