import React from 'react';
import {createRoot} from 'react-dom/client';
import HomePage from './Pages/FrontPage.js';

const root = createRoot(document.getElementById("root"));
root.render(<HomePage/>);
