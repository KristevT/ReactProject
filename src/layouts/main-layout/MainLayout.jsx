import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '@consta/uikit/Layout';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';

const MainLayout = () => {
    return (
        <Layout direction='column'>
            <Header />
            <p/>
            <Layout direction='column' flex={1}>
                <main style={{margin: "0 auto"}}>
                    <Outlet />
                </main>
            </Layout>
            <p/>
            <Footer />
        </Layout>
    )
}

export default MainLayout;