import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainJunwoo from './pages/junwooOak/Main/Main';
import LoginJunwoo from './pages/junwooOak/Login/Login';

import MainJahyun from './pages/jahyunSon/Main/Main';
import LoginJahyun from './pages/jahyunSon/Login/Login';

import MainJiyul from './pages/jiyulBaek/Main/Main';
import LoginJiyul from './pages/jiyulBaek/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-jahyun" element={<LoginJahyun />} />
        <Route path="/main-jahyun" element={<MainJahyun />} />
        <Route path="/login-jiyul" element={<LoginJiyul />} />
        <Route path="/main-jiyul" element={<MainJiyul />} />
        <Route path="/login-junwoo" element={<LoginJunwoo />} />
        <Route path="/main-junwoo" element={<MainJunwoo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
