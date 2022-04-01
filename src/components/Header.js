import React from 'react'
import { moneyFormat } from '../helpers';

const Header = ({ money, total }) => {
    return (
        <>

            {total > 0 && money - total !== 0 &&
                (<div className="header">Harcayacak {moneyFormat(money - total)}TL paranız kaldı. </div>)}
            {total === 0 && (<div className="header">Harcamak için {moneyFormat(money)}TL paranız var.</div>)
            }
            {money - total === 0 && (<div className="header">Paran bitti.</div>)}
            <style jsx>{`
                .header{ 
                    background: linear-gradient(to bottom, #20b820, #14be2a);
                    height:90px;
                    color:white;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-weight:600;
                    font-size:30px;
                    letter-spacing:1px;
                }
            `}</style>

        </>
    )
}
export default Header;
