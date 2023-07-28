import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/index.jsx";
import MyAccount from "../MyAccount/index.jsx";
import MyOrder from "../MyOrder/index.jsx";
import MyOrders from "../MyOrders/index.jsx";
import NotFound from "../NotFound/index.jsx";
import SignIn from "../SignIn/index.jsx";
import { Navbar } from "../../Components/Navbar/index.jsx";
import '../../App.css';
import {ShoppingCartProvider} from "../../Context/index.jsx";
import {CheckoutSideMenu} from "../../Components/CheckoutSideMenu/index.jsx";

const AppRoutes = () => {
  return useRoutes([
    { path: '/',  element: <Home /> },
    { path: '/my-account',  element: <MyAccount /> },
    { path: '/my-orders',  element: <MyOrders /> },
    { path: '/my-order',  element: <MyOrder /> },
    { path: '/sign-in',  element: <SignIn /> },
    { path: '/*',  element: <NotFound /> },
  ])
}

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
