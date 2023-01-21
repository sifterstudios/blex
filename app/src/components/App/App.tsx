import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BlexBar } from "../BlexBar/BlexBar";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { SignIn } from "../../pages/signIn/SignIn";
import { Search } from "../../pages/search/Search";
import { About } from "../../pages/about/About";
import { SignOut } from "../../pages/signOut/SignOut";
import { Settings } from "../../pages/settings/Settings";
import { TopBlex } from "../../pages/topBlex/TopBlex";
import { MyCollection } from "../../pages/myCollection/MyCollection";
import { NewUser } from "../../pages/newUser/NewUser";
import { LandingPage } from "../../pages/LandingPage/LandingPage";

export const AuthContext = createContext({
    isAuthenticated: true,
    login: () => { },
    logout: () => { }
});
function App() {
    useEffect(() => {
        document.body.classList.add('bg-gradient-to-tl', 'from-slate-900', 'to-cyan-900', 'dark', 'min-h-screen');
    })

    const [isAuthenticated, setIsAuthenticated] =
        useState(localStorage.getItem('isAuthenticated') === 'true');

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
    const navigate = useNavigate();



    return (
        <>
            <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
                <BlexBar />
                <div className="container bg-slate-900 h-full min-h-screen rounded">
                    <Routes>
                        <Route path="/" element={isAuthenticated ? <Search /> : <LandingPage />} />
                        <Route path="search" element={isAuthenticated ? <Search /> : <LandingPage />} />
                        <Route path="about" element={isAuthenticated ? <About /> : <LandingPage />} />
                        <Route path="signout" element={isAuthenticated ? <SignOut /> : <LandingPage />} />
                        <Route path="settings" element={isAuthenticated ? <Settings /> : <LandingPage />} />
                        <Route path="topblex" element={isAuthenticated ? <TopBlex /> : <LandingPage />} />
                        <Route path="collection" element={isAuthenticated ? <MyCollection /> : <LandingPage />} />
                        <Route path="signin" element={isAuthenticated ? <Search /> : <SignIn />} />
                        <Route path="newuser" element={isAuthenticated ? <Search /> : <NewUser />} />

                    </Routes>
                </div>
            </AuthContext.Provider>
        </>
    );
}

export default App;
