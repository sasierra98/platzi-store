import { XMarkIcon } from "@heroicons/react/24/solid/index.js";
import './style.css';
import {useContext} from "react";
import {ShoppingCartContext} from "../../Context/index.jsx";
import {OrderCard} from "../OrderCard/index.jsx";
import {totalPrice} from "../../utils/index.js";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id);
    context.setCartProducts(filteredProducts);
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className={'flex justify-between items-center p-6'}>
        <h2 className={'font-medium text-lg'}>My Order</h2>
        <div>
          <XMarkIcon
            className={'h-6 w-6 text-black cursor-pointer'}
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className={'px-6 overflow-y-scroll'}>
        {
          context.cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className={'px-6'}>
        <p className={'flex justify-between items-center'}>
          <span className={'font-light'}>Total:</span>
          <span className={'font-medium text-2xl'}>${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}
