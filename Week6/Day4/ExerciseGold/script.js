// Exercise 1 : HTML Form #3
// Instructions
// form

// Create a form like the form provided above. The form should contain three inputs:
// name,
// lastname,
// submit
// Send the data to another HTML file and display the sent data to a section tag, using the DOM.
// -->

let url=window.location.href
let data=url.split('?')[1]
let stop=data.match(['&']).index
name=data.substring('name='.length,stop)
let lastName=data.substring(stop+('&lastname=').length)
let result=`<section> ${name} ${lastName} </section>`
document.getElementById('root').innerHTML+=result



