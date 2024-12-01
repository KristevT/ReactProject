import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Responses404 } from '@consta/uikit/Responses404'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';
import LoginPage from '../../pages/login-page/LoginPage';
import MainLayout from '../../layouts/main-layout/MainLayout';
import { AppRoute } from '../const';

const App = function() {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />}/>
            <Route path={AppRoute.service} element={<ServicePage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path={AppRoute.login} element={<LoginPage />} />
          </Route>
          <Route path="*" element={<Responses404 />}/>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App
