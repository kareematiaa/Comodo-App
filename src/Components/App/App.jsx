import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Home/Home";
import AllData from "../AllData/AllData";
import Discounts from "../Discounts/Discounts";
import Details from "../Details/Details";
import MasterLayout from "../MasterLayout/MasterLayout";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "alldata", element: <AllData /> },
        { path: "details", element: <Details /> },
        { path: "discounts", element: <Discounts /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
