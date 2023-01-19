import React, { useEffect } from "react";
import "./App.css";
import { BlexBar } from "../BlexBar/BlexBar";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../../pages/signIn/SignIn";
import { Search } from "../../pages/search/Search";
import { About } from "../../pages/about/About";
import { SignOut } from "../../pages/signOut/SignOut";
import { Settings } from "../../pages/settings/Settings";
import { TopBlex } from "../../pages/topBlex/TopBlex";
import { MyCollection } from "../../pages/myCollection/MyCollection";
import * as path from "path";
import {NewUser} from "../../pages/newUser/NewUser";

function App() {
    useEffect(() => {
        document.body.classList.add('bg-slate-900');
    })
    return (<>
            <BlexBar />
            <Routes>
                <Route path="/" />
                <Route path="signin" element={<SignIn />} />
                <Route path="newuser" element={<NewUser />} />
                <Route path="search" element={<Search />} />
                <Route path="about" element={<About />} />
                <Route path="signout" element={<SignOut />} />
                <Route path="settings" element={<Settings />} />
                <Route path="topblex" element={<TopBlex />} />
                <Route path="collection" element={<MyCollection />} />
            </Routes>
        </>
    );
}

export default App;
