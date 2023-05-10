import React, { useState } from "react";

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
            <header className="p-3 d-flex align-items-center justify-content-between" style={{background: "#e4e4e4"}}>
                <div className="logo">
                    <h4>Celestial</h4>
                </div>
                <div>
                    <button className="btn" onClick={darkThemeToggle}>
                        {
                            darkThemeState ?
                                <i className="bi bi-moon-stars-fill text-primary"></i> :
                                <i className="bi bi-brightness-high-fill text-warning"></i>
                        }
                    </button>
                </div>
            </header>
            <div style={{ padding: '30px 0' }}></div>
        </>
    )
}