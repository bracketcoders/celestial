import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { mainRoutes } from "./MainRoutes"

import Header from "./assist/Header"
import Footer from "./assist/Footer"
import ScrollToTop from "./assist/ScrollToTop"

import { AuthProvider } from "./auth/AuthContext";

export default function App() {
  const theme = localStorage.getItem('dark-theme');
  if (theme === "true") {
    document.body.classList.add('dark-theme');
  }
  else {
    document.body.classList.remove('dark-theme');
  }

  return (
    <>
      <Router>
        <Header />
        <ScrollToTop>
          <AuthProvider>
            <Routes>
              {mainRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </AuthProvider>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}