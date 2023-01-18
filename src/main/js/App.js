import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Header from "../../../frontend/src/components/Header";
import LoginForm from "../../../frontend/src/components/LoginForm";
import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";

function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<Header header={BLEXSMEX}/>}>
                      {/* <Route path="/customlogin" element={<LoginForm/>}/>*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        )
}

export default App;

const container = document.getElementById('app');

// Create a root.
const root = createRoot(container);

root.render(<App/>);