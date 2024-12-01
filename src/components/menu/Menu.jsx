import React from 'react';
import { Button }  from '@consta/uikit/Button'
import { Layout }  from '@consta/uikit/Layout'
import { NavLink } from 'react-router-dom';
import { getStyleForNavLink } from '../const';

const Menu = () => {
    return (
        <Layout>
            <NavLink to="/" style={getStyleForNavLink}>
                <Button label="Главная страница" />
            </NavLink>
            <NavLink to="/services/" style={getStyleForNavLink}>
                <Button label="Страница услуг" />
            </NavLink>
        </Layout>
    );
}

export default Menu;