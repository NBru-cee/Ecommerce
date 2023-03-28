import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Account from "./pages/account/Account";
import { useSelector } from "react-redux";
import React from "react";

function App() {
    const isLoggIn = useSelector((state) => state.auth.isLoggIn);

    return (
        <>
            {isLoggIn && (
                <Router>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/register" element={<Register />} />

                        <Route exact path="/account" element={<Account />} />
                    </Routes>
                    <Footer />
                </Router>
            )}

            {!isLoggIn && <Login />}
        </>
    );
}

export default App;
