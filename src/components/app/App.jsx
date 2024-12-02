import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';
import LoginPage from '../../pages/login-page/LoginPage';
import UserPage from '../../pages/user-page/UserPage';
import MainLayout from '../../layouts/main-layout/MainLayout';
import NotFoundPage from '../../pages/not-found-page/NotFoundPage';
import CheckAuth from '../check_auth/CheckAuth';
import { AppRoute } from '../const';

const App = function() {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />}/>
            <Route path={AppRoute.service} element={<CheckAuth><ServicePage/></CheckAuth>} />
            <Route path={AppRoute.servicedetail} element={<CheckAuth><ServiceDetailPage/></CheckAuth>} />
            <Route path={AppRoute.user} element={<CheckAuth><UserPage/></CheckAuth>} />
            <Route path={AppRoute.login} element={<LoginPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App
