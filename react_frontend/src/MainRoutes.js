import Home from "./pages/Home"
import Login from "./auth/Login"

export const mainRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "login/",
        element: <Login />
    }
];