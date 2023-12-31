import Home from "pages/home/Home";
import Productdetails from "./pages/details/Product-details"
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
 



import NotFound from "./pages/NotFound";
import Cart from "pages/cart/Cart";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product-details/:id" element={<Productdetails/>} />


      <Route path="*" element={<NotFound />} />

     
    </Route>
  )
);





function App() {



  return (
  
      
      <RouterProvider router={router} />
   
  );
}

export default App;
