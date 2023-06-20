import {  createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Filter from "../Pages/Filter/Filter";
import FilterAll from "../Pages/Filter/FilterAll";
import InstockVagg from "../Pages/Filter/InstockVagg";
import InStockWhole from "../Pages/Filter/InStockWhole";
import FilterSold from "../Pages/Filter/FilterSold";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'details/:id',
                element: <Details />,
                // loader: ({params})=> fetch(`api/${params.id}`)
            },
            {
                path:  '/filter',
                element: <Filter/>,
                children:[
                  {
                    path: '/filter/all',
                    element: <FilterAll/>
                  },
                  {
                    path: '/filter/instock-vagg',
                    element: <InstockVagg/>
                  },
                  {
                    path: '/filter/instock-whole',
                    element: <InStockWhole/>
                  },
                  {
                    path: '/filter/sold',
                    element: <FilterSold/>
                  }
                ]
                
            },
            {
                path: '*',
                element: <h2> Routes not found !  </h2>
            }
        ]
    },
]);

export default router;