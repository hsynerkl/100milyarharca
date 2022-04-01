import React from 'react'

export default function BasketItem({ item, product }) {
    return (

        <div>
            <h4>{product.title} x {item.amount}</h4>
        </div>


    )
}
