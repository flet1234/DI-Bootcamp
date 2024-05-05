const MakeGrid = ()=>{
    let grid = []
    for (x=0;x<10;x++){
    for (y=0;y<10;y++){
        grid.push({ id:String(x)+String(y),
                    player:'none',
                    base:'none'})
    }
}
    return grid
}

let grid = MakeGrid()

module.exports = grid