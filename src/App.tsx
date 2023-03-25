import React, { useEffect, useState } from 'react';
import './index.css';
import { ItemList } from './ItemListComp/ItemList';
import { SearchBar } from './SearchBarComp/SearchBar';
import apiUtils from './services/api';
import orderInterface from './type';

function App() {
  const [checkedBox, setCheckedBox] = useState(true);
  const [orderList, changeOrderList] = useState<orderInterface[]>([])
  const [itemName, changeItemName] = useState('')
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const fetchOrders = () => {
    apiUtils.getData()
      .then(function (response) {
        changeOrderList(response.filterData)
      })
      .catch(function (error) {
        setError(true)
      })
      .finally(function () {
        setLoading(false)
      });
  }
  const handleTextChange = (text: string) => {
    changeItemName(text)
  }

  const handleCheckBox = () => {
    setCheckedBox(!checkedBox)
  }
  //return array based on search term or checkbox
  const renderFilteredArray = (): orderInterface[] => {
    let array = orderList
    if (checkedBox === true) {
      array = array.filter(item => item.ShippedDate !== null)
    }
    if (itemName === '') {
      return array
    }
    else {
      return array.filter(item => JSON.stringify(item.ProductList).toLowerCase().includes(itemName.toLowerCase()))
    }
  }
  useEffect(() => {
    // Fetch all orders
    fetchOrders()
  }, []);
  return (
    <div>
      <div>
        <p>NORTHWIND</p>
      </div>
      {isLoading ?
        <div className="loader"></div> :
        <>
          <SearchBar
            checkedBox={checkedBox}
            onBoxClicked={handleCheckBox}
            handleTextChange={handleTextChange} />
          <div className="listTable">
            {renderFilteredArray().length > 0 ? renderFilteredArray().map((item, index) => <ItemList
              hashNum={index} orderListDetails={item} key={index}
            />) : <p className='warnMessage'>There is no item fit your search, please try again.</p>}
          </div>
        </>}
      {isError && <p className='warnMessage'>Something went wrong, please try again.</p>}
    </div>
  );
}

export default App;
