import { ReactNode } from "react"

interface ListProps<T> {
    items: T[]
}

export default function List <T>({items}:ListProps<T>) {
    return (
        <>
            <h2>MyList</h2>
            {
                items.map((item,i)=> {
                    return (
                        <li key={i}>{item as ReactNode}</li>
                    )
                })
            }
        </>
    )
}
