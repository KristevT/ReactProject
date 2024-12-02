import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';
import LoginPage from '../../pages/login-page/LoginPage';
import UserPage from '../../pages/user-page/UserPage';
import MainLayout from '../../layouts/main-layout/MainLayout';
import { AppRoute } from '../const';
import NotFoundPage from '../../pages/not-found-page/NotFoundPage';

const App = function() {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />}/>
            <Route path={AppRoute.service} element={<ServicePage />} />
            <Route path={AppRoute.servicedetail} element={<ServiceDetailPage />} />
            <Route path={AppRoute.user} element={<UserPage/>} />
            <Route path={AppRoute.login} element={<LoginPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App
