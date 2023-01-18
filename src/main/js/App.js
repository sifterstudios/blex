import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Button} from "flowbite-react";
import '../resources/static/style.css'

export class App extends Component {
    render() {
        return (
            <div>
                <h1>B L E X</h1>
                <h1 className="bg-red-900 text-white">Hello world</h1>
                <Button>TEST BUTTON</Button>
            </div>
        );
    }
}

export default App;

ReactDOM.render(
    <App/>,
    document.getElementById("app"));