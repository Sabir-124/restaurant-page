import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Scroll } from "./context/WebContext.jsx";
import { MenuScroll } from "./context/MenuContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import OrderPage from "./components/OrderPage.jsx";
import { TotalQuantity } from "./context/TotalQuantityContext.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";
import SignUp from "./components/SignUp.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/menu", element: <Menu /> },
  { path: "/order-page", element: <OrderPage /> },
  { path: "/signup-page", element: <SignUp /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Scroll>
      <MenuScroll>
        <TotalQuantity>
          <OrderProvider>
            <RouterProvider router={router} />
          </OrderProvider>
        </TotalQuantity>
      </MenuScroll>
    </Scroll>
  </StrictMode>
);
