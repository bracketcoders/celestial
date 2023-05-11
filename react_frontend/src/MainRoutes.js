import Home from "./pages/Home"
import Login from "./auth/Login"
import Admin from "./admin/Admin"
import AddSnippet from "./admin/AddSnippet"

export const mainRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "login/",
        element: <Login />
    },
    {
        path: "admin/",
        element: <Admin />
    },
    {
        path: "snippet/add/",
        element: <AddSnippet />
    }
];