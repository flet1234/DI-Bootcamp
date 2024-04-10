let items = require('./product.js')

const search = (productName) => {
    for (let item in items){
        if (items[item].name == productName){
            return items[item]
        }
    } return null
}

console.log(search('T-shirt'));