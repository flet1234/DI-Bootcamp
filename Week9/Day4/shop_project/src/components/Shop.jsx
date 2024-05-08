import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'

const Shop = (props) => {
    const [products, setProducts] = useState([])
    const [input,setInput] = useState({})

    useEffect(()=>{
        getall()
    },[])

    const getall = async()=>{
        try {
            const res = await fetch('http://localhost:3001/api/products')
            const data = await res.json()
            setProducts(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleInput = (e) =>{
        const {value,checked,name,type}=e.target

        const inputValue = type === 'checkbox' ? checked:value
        setInput({...input, [name]:inputValue})
        
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:3001/api/products',{
                method:'POST',
                headers:{
                    'Content-Type':'Application/json'
                },
                body:JSON.stringify(input)
            })  
            if(res.status != 200){
                throw new Error('ty pidor')
            } else{
               await getall() 
            }
                
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h2>Shop</h2>
            <h4>Add product</h4>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>handleInput(e)} name="name"  placeholder="Product name..."/>
                <input onChange={(e)=>handleInput(e)} name="price"  placeholder="Product price..."/>                
                <input onChange={(e)=>handleInput(e)} type="submit" value={'add product'}/>                

            </form>
            <ol>
                {products.map(item=>{
                    return <li key={item.id} style={{
                        border:'1px solid #000',
                        margin:'20px',
                        padding:'10px'
                    }}>{item.name} {item.price} <Link to={`/${item.id}`}>Buy!</Link></li>
                })}
            </ol>
        </>
    )
}
export default Shop