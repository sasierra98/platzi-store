import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/index.jsx";
import MyAccount from "../MyAccount/index.jsx";
import MyOrder from "../MyOrder/index.jsx";
import MyOrders from "../MyOrders/index.jsx";
import NotFound from "../NotFound/index.jsx";
import SignIn from "../SignIn/index.jsx";
import '../../App.css';

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
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App