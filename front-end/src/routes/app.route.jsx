import CartPage from "../pages/cart/CartPage";
import LoginPage from "../pages/login/LoginPage";
import RootPage from "../pages/root/RootPage";

// import NotFound from "../pages/error/not-found-page";


const appRoute = [
  {
    path: "",
    element: <RootPage/>,
    // children: [
    //   {
    //     path: "",
    //     element: <Button />
    //   }
    // ]
  },
  {
    path: "cart",
    element: <CartPage />,
    // TODO ajouter les enfants commer cart2 puis 3 jusqu'au paiement
    // children: [
    //   {
    //     path: "",
    //     element: <Button />
    //   }
    // ]
  },
  {
    path: "login",
    element: <LoginPage/>
  }
  // {
// Ci dessous pour gestion des autres routes (donc erreur)
    // path: "*",
    // element: <NotFound />, // TODO ajouter la 404
  // },
];

export default appRoute;