import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        console.log(products),
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList