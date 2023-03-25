import React from 'react'
import apiUtils from '../services/api'
import orderInterface from '../type';

interface Props {
    hashNum: number,
    orderListDetails: orderInterface,
}
export const ItemList: React.FC<Props> = ({ hashNum, orderListDetails: { ShipAddress, ShipCity, ShipCountry, ShipPostalCode, ShipRegion, ContactName, OrderID, ProductList } }) => {
    const sliceArray = ProductList.slice(0, 3)
    //If product list is longer than 4 then show 3 and then show the rest as number
    const restOfItemName = ProductList.length - 3
    const LongList = () => {
        return (
            <div>
                {sliceArray.map((item, index) => <p key={index}>{item.ProductName}</p>)}
                <p>{`+ ${restOfItemName} more`}</p>
            </div>
        )
    }
    return (
        <div className='itemList'>
            <p id="index">#{hashNum += 1}</p>
            <div>
                <p id="title1">Shiping address</p>
                <p>{ShipAddress},{ShipCity} <br /> {ShipRegion} {ShipPostalCode} <br /> {ShipCountry} </p>
            </div>
            <div>
                <p id="title2">Customer Name</p>
                <p>{ContactName}</p>
            </div>
            <div>
                <p id="title3">Products</p>
                {ProductList.length > 0 && ProductList.length < 4 ? ProductList.map((item, index) => <p key={index}>{item.ProductName}</p>) : <LongList />}
            </div>
            <button className='orderButton' type="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `${apiUtils.dbURL}/${OrderID}`;
                }}>View Details</button>
        </div>
    )
}