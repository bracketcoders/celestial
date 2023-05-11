import { NavLink } from "react-router-dom"

export default function Admin() {
    return (
        <>
            <div className="container-fluid text-center admin-panel">
                <div className="row cover-space">
                    <div className="col-3 sidebar">
                        <div className="py-5">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <NavLink to={"/login"} className="nav-link">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/snippet/add/"} className="nav-link">
                                        Add Snippet
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9 content-area p-4">
                        <h4>Welcome! Admin</h4>
                    </div>
                </div>
            </div>
        </>
    )
}