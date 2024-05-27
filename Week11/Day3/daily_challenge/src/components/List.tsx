import React from "react"

interface ListProps<T> {
    items:T[]
    renderItem:(item:T)=>React.ReactNode
}


const List = <T,>({items, renderItem}:ListProps<T>) => {

    return (
        <>
            {items.map((item,index)=>{
               return( 
                <div key={index}>
                    {renderItem(item)}
                </div>
                )
            })}
        </>
    )
}

export default List