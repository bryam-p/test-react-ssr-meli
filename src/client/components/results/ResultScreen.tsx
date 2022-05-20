import { Link } from 'react-router-dom'
import { Item } from '../../types/search'
import { formatPrice } from '../../utils/formatPrice'
//@ts-ignore
import shippingLogo from '../../assets/ic_shipping.png'

export const ResultScreen =
    ({
        id,
        title,
        price,
        picture,
        condition,
        free_shipping
    }: Item) => {

        const formattedPrice = price.currency ? formatPrice(price?.currency).format(price?.amount) : 0
        const changeLanguage = condition === 'new' ? 'Nuevo' : condition === 'used' ? 'Usado' : condition

        return (
            <li className="results__wrap">
                <Link to={`/items/${id}`} className="results__wrap--image">
                    <div className="results__wrap--picture">
                        <img src={picture} alt={title} loading="lazy" width="180" height="180" />
                    </div>
                </Link>

                <div className="features">
                    <div className="features__price">
                        <div className="features__price--price">{formattedPrice}</div>
                        <div className="features__price--freeShipping">
                            {free_shipping && <img src={shippingLogo} alt="shipping logo" width="18" height="18" loading="lazy" />}
                        </div>
                    </div>

                    <Link to={`/items/${id}`} className="features__title" >
                        <h2>
                            {title}
                        </h2>
                    </Link>
                    <span className="features__condition">{changeLanguage}</span>
                </div>
            </li>

        )
    }
