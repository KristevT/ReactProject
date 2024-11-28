import { Button } from '@consta/uikit/Button';
import { NavLink } from 'react-router-dom';
import { Layout } from '@consta/uikit/Layout';
import Menu from '../menu/Menu';
import React from 'react';
import { getStyleForNavLink } from '../const';

const Header = () => {
    return (
        <Layout>
            <Menu />
            <NavLink style={getStyleForNavLink}>
                <Button label='ФИО'></Button>
            </NavLink>
            <NavLink style={getStyleForNavLink}>
                <Button label='Вход'></Button>
            </NavLink>
        </Layout>
    );
}

export default Header;