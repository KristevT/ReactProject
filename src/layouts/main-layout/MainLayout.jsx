import React from 'react';
import { Outlet } from 'react-router-dom';
// import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header'

const MainLayout = () => {
    return (
        <div>
            <Header />
            <hr />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;