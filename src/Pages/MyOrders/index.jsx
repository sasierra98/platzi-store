import {Layout} from "../../Components/Layout/index.jsx";
import {OrdersCard} from "../../Components/OrdersCard/index.jsx";
import {useContext} from "react";
import {ShoppingCartContext} from "../../Context/index.jsx";
import {Link} from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className={'flex items-center justify-center w-80 relative'}>
        <h1>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders
