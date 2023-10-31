//Recursos 
import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

//Páginas importadas
import LoginRender from './pages/Login/Login';
import CadastroRender from './pages/CadastroUsuario/CadastroUsuario';

//Import e Export de serviços

const Router = createBrowserRouter([
  {
    path: '/',
    element: <LoginRender/>
  },
  
  {
    path: '/Cadastro',
    element: <CadastroRender/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

