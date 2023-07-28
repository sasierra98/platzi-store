import {Layout} from "../../Components/Layout/index.jsx";
import {OrderCard} from "../../Components/OrderCard/index.jsx";
import {useContext} from "react";
import {ShoppingCartContext} from "../../Context/index.jsx";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      My Order
      <div className={'flex flex-col w-80'}>
        {
          context.order?.slice(-1)[0].products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder
