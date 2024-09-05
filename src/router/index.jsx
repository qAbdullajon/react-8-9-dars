import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from '../App'
import { Home, SignUp, Wallet, Artist } from '../pages'

const Root = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/connect-wallet' element={<Wallet />} />
        <Route path='/artist' element={<Artist />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default Root