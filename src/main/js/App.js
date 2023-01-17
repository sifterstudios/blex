import React, {Component} from "react";
import ReactDOM from "react-dom";

export class App extends Component {
    render() {
        return (
            <div>
                <h1>B L E X</h1>
            </div>
        );
    }
}

export default App;

ReactDOM.render(
    <App/>,
    document.getElementById("blex"));