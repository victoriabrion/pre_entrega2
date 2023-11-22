import { Link } from 'react-router-dom'

const Item = ({id, artist, album, price, category, img, stock}) => {

    return (
        <article className="CartItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {artist}
                </h2>
            </header>
            <picture>
                <img src={img} alt={album} className="ItemImg"></img>
            </picture>
            <section>
                <p className="Info">
                    Price: ${price}
                </p>
                <p className="Info">
                    Stock available: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to = {`/item/${id}`} className='Option'>Detalis</Link>
            </footer>
        </article>
    )
}

export default Item