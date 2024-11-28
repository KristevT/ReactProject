import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Button } from '@consta/uikit/Button';

import { Attachment } from '@consta/uikit/Attachment'
import { Card } from '@consta/uikit/Card'

import { Text } from '@consta/uikit/Text'
import { Layout } from '@consta/uikit/Layout'
import { cnMixSpace } from '@consta/uikit/MixSpace'

import { BrowserRouter, Router, Route } from "react-router-dom";
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';

const App = function() {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />}/>
            <Route path="/service" element={<ServicePage />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Route>
          <Route path="*" element={<Response404 />} />
        </Routes>
      </BrowserRouter>
      {/* {/* Attachment
        fileName="Скан паспорта"
        fileExtension="pdf"
        withPictogram
        fileDescription="1,5 Мб, 19.07.2020, 16:12"
      />
      
      } */}
    </Theme>
  )
};

export default App;
