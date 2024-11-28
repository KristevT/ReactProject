import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <hr />
            <main>
                <Outlet />
            </main>
            <Menu />
        </div>
    )
}

export default MainLayout;