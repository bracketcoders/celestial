import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [darkThemeState, setDarkThemeState] = useState(localStorage.getItem('dark-theme'));
    const darkThemeToggle = () => {
        const theme = localStorage.getItem('dark-theme');

        if (theme === "true") {
            localStorage.setItem('dark-theme', false);
            document.body.classList.remove('dark-theme');
            setDarkThemeState(true);
        }
        else {
            localStorage.setItem('dark-theme', true);
            document.body.classList.add('dark-theme');
            setDarkThemeState(false);
        }
    }

    return (
        <>
            <header className="p-3 header">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <Link to={"/"} className="nav-link mx-3">
                            <h4 className="mb-0">Celestial</h4>

                        </Link>
                    </div>
                    <div className="d-flex align-items-center">
                        <Link to={"/login"} className="nav-link mx-3">
                            Login
                        </Link>
                        <button className="btn" onClick={darkThemeToggle}>
                            {
                                darkThemeState ?
                                    <i className="bi bi-moon-stars-fill text-primary"></i> :
                                    <i className="bi bi-brightness-high-fill text-warning"></i>
                            }
                        </button>
                    </div>
                </div>
            </header>
            <div style={{ padding: '35px 0' }}></div>
        </>
    )
}