// Mini-Project - Robo-Friends Search
// Last Updated: September 22nd, 2023

// What You Will Learn
// Array and Object methods
// Array and Object destructuring
// Functions and arrow functions
// DOM tree


// What You Will Create
// A Robo-Friends Search with Advanced Javascript

// In this project you will have to create a robot website (you can use your own css to style your project):
// robot project #1



// Instructions
// PART I : The Website
// The webpage displays Cards of Robots with their respective image and information.

// robot project #1



// 2. You have to create the cards by using the values from the array of objects provided in the ASSETS below.


// PART II : The Filter
// When you search for a specific name in the search box, the webpage filters the cards displayed. For example is you write “nic” in the search box, you will display the robot which name contains “nic”, which means only one robot: “Nicholas”.
// robot project #2


// 2. Display the cards in the DOM, using DOM elements and selectors, and filter them with the search box.


// PART II : The Style
// You can use your own images or use this website to generate a new Robot Image.

// Check out those links to generate the correct font
// cdnfonts
// dafont

// You can use those images for the background (click righ on the images below, and “Save image as…” )
// background imagebackground image

// Assets
//       const robots = [
//           {
//             id: 1,
//             name: 'Leanne Graham',
//             username: 'Bret',
//             email: 'Sincere@april.biz',
//             image: 'https://robohash.org/1?200x200'
//           },
//           {
//             id: 2,
//             name: 'Ervin Howell',
//             username: 'Antonette',
//             email: 'Shanna@melissa.tv',
//             image: 'https://robohash.org/2?200x200'
//           },
//           {
//             id: 3,
//             name: 'Clementine Bauch',
//             username: 'Samantha',
//             email: 'Nathan@yesenia.net',
//             image: 'https://robohash.org/3?200x200'
//           },
//           {
//             id: 4,
//             name: 'Patricia Lebsack',
//             username: 'Karianne',
//             email: 'Julianne.OConner@kory.org',
//             image: 'https://robohash.org/4?200x200'
//           },
//           {
//             id: 5,
//             name: 'Chelsey Dietrich',
//             username: 'Kamren',
//             email: 'Lucio_Hettinger@annie.ca',
//             image: 'https://robohash.org/5?200x200'
//           },
//           {
//             id: 6,
//             name: 'Mrs. Dennis Schulist',
//             username: 'Leopoldo_Corkery',
//             email: 'Karley_Dach@jasper.info',
//             image: 'https://robohash.org/6?200x200'
//           },
//           {
//             id: 7,
//             name: 'Kurtis Weissnat',
//             username: 'Elwyn.Skiles',
//             email: 'Telly.Hoeger@billy.biz',
//             image: 'https://robohash.org/7?200x200'
//           },
//           {
//             id: 8,
//             name: 'Nicholas Runolfsdottir V',
//             username: 'Maxime_Nienow',
//             email: 'Sherwood@rosamond.me',
//             image: 'https://robohash.org/8?200x200'
//           },
//           {
//             id: 9,
//             name: 'Glenna Reichert',
//             username: 'Delphine',
//             email: 'Chaim_McDermott@dana.io',
//             image:'https://robohash.org/9?200x200'
//           },
//           {
//             id: 10,
//             name: 'Clementina DuBuque',
//             username: 'Moriah.Stanton',
//             email: 'Rey.Padberg@karina.biz',
//             image:'https://robohash.org/10?200x200'
//           }
//           ];

const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

for (item of robots){
    let newDiv=document.createElement('div')
    let newPic=document.createElement('img')
    let newName=document.createElement('h3')
    let newNameText=document.createTextNode(item.name)
    let newEmail=document.createElement('p')
    let newEmailText=document.createTextNode(item.email)
    newPic.setAttribute('src',`${item.image}`)
    newPic.style.borderRadius='50%'
    newPic.style.backgroundColor='darkblue'
    newPic.style.height='60%'
    newPic.style.marginTop='15px'
    newPic.style.height='75%'
    newPic.style.width='90%'
    newDiv.style.backgroundImage=`url(resources/card-pattern.png)`
    newDiv.style.backgroundColor='aqua'
    newDiv.style.width='330px'
    newDiv.style.height='420px'
    newDiv.style.margin='10px'
    newDiv.style.display='flex'
    newDiv.style.flexDirection='column'
    newDiv.style.alignItems='center'
    newDiv.style.borderRadius='10px'
    newDiv.setAttribute('id',`${item.id}`)
    newDiv.appendChild(newPic)
    newName.style.fontSize='26px'
    newName.style.fontWeight='bold'
    newName.style.marginTop='15px'
    newName.style.textAlign='left'
    newEmail.style.marginBottom='40px'
    newName.appendChild(newNameText)
    newEmail.appendChild(newEmailText)
    newDiv.appendChild(newName)
    newDiv.appendChild(newEmail)
    document.getElementById('main').appendChild(newDiv)
}  

document.getElementById('search').addEventListener('input',findbots)

let nameList=[]
    for (item of robots){
        nameList.push(item.name.toLowerCase())
    }
function findbots(){
    for (element of document.getElementsByTagName('div')){
        element.style.display='none'
        document.getElementById('main').style.height='100vh'
    }
    for (nameItem of nameList){
        if (nameItem.includes(this.value.toLowerCase())){
            for (robot of robots){
                if (robot.name.toLowerCase()==nameItem){
                    document.getElementById(`${robot.id}`).style.display='flex'
                }
            }
        }
    }
}
