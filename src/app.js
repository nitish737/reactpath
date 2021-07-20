import React from 'react' ;
import "./app.scss";
import A1exporter from "./exporter/A1exporter";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return(
        <React.Fragment>
            <BrowserRouter>
                <A1exporter/>
            </BrowserRouter>
        </React.Fragment>
    )
}


export default App ;