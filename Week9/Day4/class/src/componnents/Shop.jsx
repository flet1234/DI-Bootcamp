import {Link} from 'react-router-dom'

const Shop = (props) => {
    return (
        <>
            <div>{''} <h2>Product 1</h2> </div>
            <Link to='/product/1'>Buy</Link>
            <div>{''} <h2>Product 2</h2> </div>
            <Link to='/product/2'>Buy</Link>
        </>
    )
}
export default Shop