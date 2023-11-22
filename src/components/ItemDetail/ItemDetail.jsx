import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, artist, album, price, category, img, stock}) => {
    return (
        <article className='CartItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Category: {category}
                </p>
                <p className='Info'>
                    Artist: {artist}
                </p>
                <p className='Info'>
                    Price: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity => console.log('Quantity added', quantity))} />
            </footer>
        </article>
    )
}

export default ItemDetail