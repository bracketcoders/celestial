import { NavLink } from "react-router-dom"

export default function Admin({ component }) {
    return (
        <>
            <div className="container-fluid admin-panel">
                <div className="row">
                    <div className="col-3 sidebar p-0">
                        <div className="py-4">
                            <div className="py-3 px-4">
                                <h5>Celestial Notes</h5>
                            </div>

                            <form className="search mb-4 px-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                />
                            </form>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <NavLink to={"/profile"} className="nav-link px-4">
                                        Profile
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/search"} className="nav-link px-4">
                                        Search
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/notes"} className="nav-link px-4">
                                        Notes
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/note/add/"} className="nav-link px-4">
                                        Add Note
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/trash"} className="nav-link px-4">
                                        Trash
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9 content-area p-0">
                        {
                            !component &&
                            <>
                                <h4>Welcome! Admin</h4>
                            </>
                        }
                        {component}
                    </div>
                </div>
            </div>
        </>
    )
}