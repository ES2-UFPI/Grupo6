import React, { useState } from 'react'

import './Styles/Historic.css'

const Historic = () => {

    const items = Array(5).fill({
            id: '1234',
            buyerId: '4321',
            sellerId: '0123',
            sellerName: 'Jô',
            productName: 'produto',
            localizationCode: 'localizationCode',
            productPicture: 'https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            status: "¯|_(ツ)_/¯",
            rating: '3.5',
            wouldBarterAgain: 'y/n'
        })
    
    const [inspec, setInspec] = useState(items[0])
    
    const details = (
        <div id='dMain' className="details-main">
            <div className="details-close"><button onClick={()=>{document.getElementById('dMain').style.visibility = "hidden"}}></button></div>
            <div className="details-img">
                <img src={inspec.productPicture} alt="product"/>
            </div>
            <div>
                <label>cod: {inspec.id}</label>
            </div>
            <div><label>would barter again? {inspec.wouldBarterAgain}</label></div>
            <div><label>Avaliação: {inspec.rating}</label></div>
        </div>
    )
    
    return (
        <div className="historic-main">
            <h2 className="historic-title">Histórico de Transações</h2>
            <div className="transation-items">
                {items.map((i, index) => {
                    return (
                        <div className="transation-item-info">
                            <div className="left">
                                <h2>{i.productName}</h2>
                                <div><label>Vendedor: {i.sellerName}</label></div>
                                <div><label>Localizar: {i.localizationCode}</label></div>
                                <div><label>Status: {i.status}</label></div>
                            </div>
                            <div className="right">
                                <button onClick={()=>{
                                    document.getElementById('dMain').style.visibility = "visible"
                                    setInspec(i)}}>Inspecionar</button>
                            </div>
                        </div>
                    )
                })}  
            </div>
            <div>{details}</div>
        </div>
    )
}

export default Historic