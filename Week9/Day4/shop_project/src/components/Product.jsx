import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"


const Product = (props) => {
    const [product,setProduct]=useState([])
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        info()
    },[])

    const info = async()=>{
        try {
            const res = await fetch(`http://localhost:3001/api/products/${params.id}`)
            const data = await res.json()
            setProduct(data)
        } catch (error) {
            navigate('/')
            console.log(error);
        }
    }

    const back = () => {
        navigate('/')
    }
    return (
        <>
            <h2>Product</h2>
            <h2>Delete</h2>
            <h2>Update</h2>
            {
                product.map(item=>{
                    return  <div key={item.id}>
                                <h4>{item.name}</h4>
                                <h4>{item.price}</h4>
                                <Link to={'/'}>continue shoping</Link>
                            </div>
                })
            }
            <button onClick={()=>back()}>Back to Home</button>
        </>
    )
}
export default Product