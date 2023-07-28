import {createContext, useEffect, useState} from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () =>  setIsProductDetailOpen(true);
  const closeProductDetail = () =>  setIsProductDetailOpen(false);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(false);

  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=100');
        const data = await response.json();
        setItems(data);
      } catch (e) {
        console.error(`${e}`)
      }
    }
    fetchData();
  }, [])

  const filteredItemsByTitle = (items) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle]
  )


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      isCheckoutSideMenuOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
