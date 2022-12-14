import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css'
import './styles/tailwind.css'
import './styles/textStyle.css';
import './styles/animations.css';


import App from './App';



import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
