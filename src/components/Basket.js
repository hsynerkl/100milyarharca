import React from 'react'
import BasketItem from './BasketItem'
import { moneyFormat } from '../helpers';
const Basket = ({ basket, products, total }) => {
    return (
        <div>
            {basket.map(item => (
                <BasketItem key={item.id} product={products.find(p => p.id === item.id)} item={item} />
            ))}

            {total > 0 && (<div> Toplam: {moneyFormat(total)}TL</div>)}


        </div>
    )
}

export default Basket