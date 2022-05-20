import React from 'react'
import { ItemProduct } from '../../types/item-product'
import { formatPrice } from '../../utils/formatPrice'
//@ts-ignore
import shippingLogo from '../../assets/ic_shipping.png'


export const ProductScreen = ({
    item,
    condition,
    free_shipping,
    sold_quantity
}: ItemProduct) => {

    const formattedPrice = item ? formatPrice(item.price.currency).format(item.price.amount) : 0
    const changeLanguage = condition === 'new' && condition !== undefined ? 'Nuevo' : 'Usado'

    return (
        <div className="pdp__column-right--wrap">
            <div className="wrap__sold">
                <span className="wrap__sold--value">{changeLanguage}  |  {sold_quantity} vendidos</span>
                {free_shipping && <img src={shippingLogo} alt="shipping logo" width="18" height="18" loading="lazy" className="wrap__sold--shipping" />}

            </div>
            <div className="wrap__title">
                <h1>{item?.title}</h1>
            </div>
            <div className="wrap__price">
                {formattedPrice}
            </div>
            <button className="wrap__btn-buy">
                Comprar
            </button>
        </div>
    )
}
