import React, { Suspense } from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import './index.css'

const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default App