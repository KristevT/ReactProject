import { NavLink } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { Avatar } from '@consta/uikit/Avatar';
import { Layout } from '@consta/uikit/Layout';
import Menu from '../menu/Menu';
import React from 'react';

const Header = () => {
    const avatar = () => <Avatar url="https://dummyjson.com/icon/emilys/128" name="Имя Пользователя"/>
    return (
        <Layout>
            <Menu />
            <NavLink style={{padding: 5}}>
                <Button label='Имя Пользователя' form="round" iconLeft={avatar} disabled></Button>
            </NavLink>
            <NavLink to="/login/" style={{padding: 5}}>
                <Button label='Вход' form="round" view="secondary"></Button>
            </NavLink>
        </Layout>
    );
}

export default Header;