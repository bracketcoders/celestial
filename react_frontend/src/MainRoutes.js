import Home from "./pages/Home"
import Login from "./auth/Login"
import Admin from "./admin/Admin"
import AddSnippet from "./admin/AddSnippet"
import Snippets from "./admin/Snippets"
import Trash from "./admin/Trash"
import Search from "./admin/Search"
import Profile from "./admin/Profile"

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
        path: "snippets/",
        element: <Admin component={<Snippets />} />
    },
    {
        path: "snippet/add/",
        element: <Admin component={<AddSnippet />} />
    },
    {
        path: "trash",
        element: <Admin component={<Trash />} />
    },
    {
        path: "search",
        element: <Admin component={<Search />} />
    },
    {
        path: "profile",
        element: <Admin component={<Profile />} />
    },
];