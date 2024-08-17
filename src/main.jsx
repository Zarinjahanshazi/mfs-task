import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Main/Main.jsx';
import AuthProviders from './Firebase/AuthProviders.jsx';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProviders>
<RouterProvider router={router} />
<Toaster />
</AuthProviders>
</StrictMode>,
)




