import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BlexBar } from "../BlexBar/BlexBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SignIn } from "../../pages/signIn/SignIn";
import { Search } from "../../pages/search/Search";
import { About } from "../../pages/about/About";
import { SignOut } from "../../pages/signOut/SignOut";
import { Settings } from "../../pages/settings/Settings";
import { TopBlex } from "../../pages/topBlex/TopBlex";
import { MyCollection } from "../../pages/myCollection/MyCollection";
import { NewUser } from "../../pages/newUser/NewUser";
import { LandingPage } from "../../pages/LandingPage/LandingPage";
import http from '../../http-common';
import { Add } from "../../pages/add/Add";

export const AuthContext = createContext({
    isAuthenticated: false,
    login: (username: string | null) => { },
    logout: () => { },
    username: '',
});
function App() {
    useEffect(() => {
        document.body.classList.add('bg-gradient-to-tl', 'from-slate-900', 'to-cyan-900', 'dark', 'min-h-screen');
    }, []);

const pdfListCacheKey = 'pdfListCache';

const fetchPdfList = async () => {
    let pdfList;

    const pdfListCache = localStorage.getItem(pdfListCacheKey);
    if(pdfListCache) {
        pdfList = JSON.parse(pdfListCache);
    }else{
        const response = await http.get('document', {
            headers: {
                'Cache-Control': 'max-age=300',
            },
        });
        pdfList = response.data;
        localStorage.setItem(pdfListCacheKey, JSON.stringify(pdfList));
    }
    return pdfList;
}

fetchPdfList();



    const [isAuthenticated, setIsAuthenticated] =
        useState(localStorage.getItem('isAuthenticated') === 'true');
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const login = (username: string | null) => {
        setIsAuthenticated(true);
        setUsername(username!);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', username!);
    };
    const logout = () => {
        setIsAuthenticated(false);
        setUsername('');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
    };
    const navigate = useNavigate();


    return (
        <>
            <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
                <BlexBar  onLogout={logout} />
                <div className="container bg-slate-900 h-full min-h-screen rounded">
                    <Routes>
                        <Route path="/" element={isAuthenticated ? <Search /> : <LandingPage />} />
                        <Route path="search" element={isAuthenticated ? <Search /> : <LandingPage />} />
                        <Route path="about" element={isAuthenticated ? <About /> : <LandingPage />} />
                        <Route path="signout" element={isAuthenticated ? <SignOut /> : <LandingPage />} />
                        <Route path="settings" element={isAuthenticated ? <Settings /> : <LandingPage />} />
                        <Route path="topblex" element={isAuthenticated ? <TopBlex /> : <LandingPage />} />
                        <Route path="collection" element={isAuthenticated ? <MyCollection /> : <LandingPage />} />
                        <Route path="signin" element={isAuthenticated ? <Search /> : <SignIn onLogin={login} />} />
                        <Route path="newuser" element={isAuthenticated ? <Search /> : <NewUser onRegister={(data) => console.log(data)} />} />
                        <Route path="add" element={isAuthenticated ? <Add /> : <LandingPage />} />
                    </Routes>
                </div>
            </AuthContext.Provider>
        </>
    );
}

export default App;
