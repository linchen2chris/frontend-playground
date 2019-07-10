import * as React from "react";
import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>Foo to the barz</p>
                <img src={reactLogo} height="480" />
            </div>
        );
    }
}

declare let module: Object;

export default hot(module)(App);
