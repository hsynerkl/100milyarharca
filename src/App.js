import Header from './components/Header'
import Product from './components/Product'
import products from './product.json'
import Basket from './components/Basket'
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [money, setMoney] = useState(100000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price));
    }, 0))
  }, [basket])

  const resetBasket = () => {
    setBasket([])
  }

  return (
    <div className="App">
      <Header total={total} money={money} />
      <div className="container">
        {products.map(product => (
          <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
        ))}
      </div>
      {total > 0 && <Basket basket={basket} products={products} total={total} />}
      <button onClick={resetBasket}> sepeti sıfırla</button>


      <style jsx>{`.container{
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
        grid-column-gap:1rem;
        grid-row-gap:2rem;
        width:100%;
      }
      
      button{
        padding:10px;
        background:linear-gradient(to bottom, #20b820, #14be2a);
        color:white;
        margin-top:10px;
        margin-bottom:10px;
      }
      `
      }</style>
    </div>


  );
}

export default App;
