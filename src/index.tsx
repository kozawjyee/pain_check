import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

const protal = document.getElementById("root")!;
const root = ReactDOM.createRoot(protal);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)