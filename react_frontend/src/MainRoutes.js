import Home from "./pages/Home"
import Login from "./auth/Login"
import Admin from "./admin/Admin"
import AddNote from "./admin/AddNote"
import Notes from "./admin/Notes"
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
        path: "notes/",
        element: <Admin component={<Notes />} />
    },
    {
        path: "note/add/",
        element: <Admin component={<AddNote />} />
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