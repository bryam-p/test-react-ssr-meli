import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter'
import './sass/index.scss';

hydrate(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>, document.getElementById("root"))