import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";

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
            }
        ]
    },
]);

export default router;