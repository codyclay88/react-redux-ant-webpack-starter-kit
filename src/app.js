import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './Store/configureStore';
import BaseLayout from './Layouts/BaseLayout';

const store = configureStore();

render(( 
    <Provider store = { store }>
        <BrowserRouter >
            <BaseLayout />
        </BrowserRouter>  
    </Provider>
), document.getElementById('app'));