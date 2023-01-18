const React = require('react');
import {Component} from "react";
import Header from "../../../frontend/src/components/Header";
import {createRoot} from "react-dom/client";

export class App extends Component {
    render() {
        return (
            <div>
                <h1>B L E X</h1>
                <Header headerText={'BLEXFLEX'}></Header>
            </div>
        );
    }
}

export default App;

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App/>);