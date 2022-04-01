import React from 'react'
import { moneyFormat } from '../helpers';
const Product = ({ product, basket, setBasket, total, money }) => {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket]);
        }
        else {
            setBasket([...basket, {
                id: product.id,
                amount: 1,
            }])
        }
    }
    const removeBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        checkBasket.amount -= 1;
        if (checkBasket.amount === 0) {
            setBasket([...basket.filter(item => item.id !== product.id)])
        }
        else {
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket]);
        }
    }


    return (
        <>
            <div className="product">
                <img src={product.image} />
                <h1>{product.title}</h1>
                <h3 className="price">{moneyFormat(product.price)} TL</h3>
                <div className="actions">
                    <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button disabled={total + product.price > money} onClick={addBasket}>Satın al</button>
                </div>
                <style jsx>{`
            .product{ padding:10px;
                background:#fff;
                border:1px solid #ddd;
                margin:10px;
                display:flex;
                flex-direction:column;
                align-items:center;       
                flex-wrap:wrap;
            }
            .product img 
            {width:100%;
            margin-bottom:10px;
             height:300px;
             object-fit:cover;
                }
                .amount{ font-size:20px;
                margin:10px;
                }
            `}</style>
            </div>

        </>
    )
}

export default Product