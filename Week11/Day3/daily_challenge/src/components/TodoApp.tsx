import { useState} from "react";
import List from "./List";
import { v4 as uuidv4 } from 'uuid'

type Item = {
    id: string;
    text: string;
};

const TodoApp = () => {
    const [items, setItems] = useState<Item[]>([])

    const add = () => {
        const newItem:Item = {id:uuidv4(),text:new Date().toLocaleDateString()}
        setItems([...items, newItem]) 
    }

    return (
        <>
            <button onClick={add}>Add item:</button>
            <h2>Tasks:</h2>
            <List items={items}  renderItem={(item) => (
                    <div>
                        {item.id}: {item.text}
                    </div>
                )}
            />
        </>
    )
}

export default TodoApp