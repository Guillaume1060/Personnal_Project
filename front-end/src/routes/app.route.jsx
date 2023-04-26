import About from "../containers/about/About";
import CartPage from "../pages/cart/CartPage";
import LoginPage from "../pages/login/LoginPage";
import RootPage from "../pages/root/RootPage";
import SignIn from "../pages/login/pages/SignInPage";
import SignUp from "../pages/login/pages/SignUpPage";


// import NotFound from "../pages/error/not-found-page";
const appRoute = [
  {
    path: "",
    element: <RootPage/>,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "login",
    element: <LoginPage/>,
    children:[
      {
        index:true,
        element: <SignIn/>
      },
      {
        path:'signUp',
        element: <SignUp/>
      },
    ]
  },
// Ci dessous pour gestion des autres routes (donc erreur)
    // path: "*",
    // element: <NotFound />, // TODO ajouter la 404
  // },
];

export default appRoute;