import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./pages/Root"
import HomePage from "./pages/home/HomePage"
import ShopPage from "./pages/ShopPage"
import RecipePage from "./pages/RecipePage"
import AboutPage from "./pages/AboutPage"
import ProductPage from "./pages/ProductPage"
import { homeLoader } from "./pages/home/homeLoader"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader
      },
      {
        path: "/shop",
        element: <ShopPage />
      },
      {
        path: "/recipes",
        element: <RecipePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/product",
        element: <ProductPage />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
