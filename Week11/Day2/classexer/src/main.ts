import FullList from "./model/Fulllist";
import ListItem from "./model/ListItem";

import './style.css'
import ListTeamplate from "./teamplate/ListTemplate";

const init = () => {
  const fullist = new FullList()
  const teamplate = new ListTeamplate()

  // add listener to form submit
  const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement 
  const clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement

  itemEntryForm.addEventListener('submit', (e:SubmitEvent):void =>{
    e.preventDefault()

    // get a new item value
    const input = document.getElementById('newItem') as HTMLInputElement
    const newEntryValue:string = input.value.trim()
    if(!newEntryValue) return

    // create a new item
    const newItem = new ListItem(Date.now().toString(), newEntryValue)

    fullist.addItem(newItem)

   

    teamplate.render(fullist)
  })

  clearButton.addEventListener('click', ():void =>{
    fullist.clearList()
    teamplate.render(fullist)
  })

  fullist.load()
  teamplate.render(fullist)
}

document.addEventListener('DOMContentLoaded',init)


// window.localStorage.setItem('list',JSON.stringify(['dan','john','jane']))
// const item = window.localStorage.getItem('list')
// console.log(JSON.parse(item));
// window.localStorage.clear()
