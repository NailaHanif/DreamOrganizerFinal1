import React, { useState } from 'react';

const AppContext = React.createContext();

const baseUrl='http://192.168.1.19:8888'
export const AppProvider = ({ children }) => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedC, setSelectedC] = useState([]);
  const [selectedSC, setSelectedSC] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [myCart, setMyCart] = useState([]);
  const [customerAddress, setCustomerAddress] = useState([]);
  const [vendorAddress, setVendorAddress] = useState([]);
  const [myOrder, setMyOrder] = useState([]);
  const [cartComingFrom, setCartComingFrom] = useState('Cart');
  const [isAddedIntoCart, setIsAddedIntoCart] = useState(false);

  const storeCartComingFrom = val => {
    setCartComingFrom(val);
  };
  const storeIsAddedIntoCart = val => {
    setIsAddedIntoCart(val);
  };
  const storeSelectedEvent = val => {
    setSelectedEvent(val);
  };

  const storeSelectedC = val => {
    setSelectedC(val);
  };
  const storeCustomerAddress = val => {
    setCustomerAddress(val);
  };
  const storeVendorAddress = val => {
    setVendorAddress(val);
  }; const storeSelectedSC = val => {
    setSelectedSC(val);
  };
  const storeSelectedProduct = item => {
    setSelectedProduct(item);
  };

  const storeInCart = item => {
    setMyCart(oldCart => [
      ...oldCart,
      { ...item, productId: generateProductId() },
    ]);
  };

  const removeFromCart = productId => {
    setMyCart(oldCart => oldCart.filter(item => item.productId !== productId));
  };

  const generateProductId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const storeInOrder = item => {
    setMyOrder(oldOrder => [...oldOrder, item]);
  };
  const CartEmpty = () => {
    setMyCart([]);
  };

  const addToCart = item => {
    setMyCart(oldCart => [...oldCart, item]);
  };

  return (
    <AppContext.Provider
      value={{
        baseUrl,
        selectedEvent,
        selectedC,
        selectedSC,
        selectedProduct,
        myCart,
        myOrder,
        cartComingFrom,
        isAddedIntoCart,
        storeCartComingFrom,
        storeSelectedEvent,
        storeSelectedC,
        storeSelectedSC,
        storeSelectedProduct,
        storeInCart,
        storeIsAddedIntoCart,
        storeInOrder,
        storeCustomerAddress,
        storeVendorAddress,
        CartEmpty,
        addToCart,
        removeFromCart,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
