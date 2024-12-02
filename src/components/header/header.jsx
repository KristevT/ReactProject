import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { Avatar } from '@consta/uikit/Avatar';
import { Layout } from '@consta/uikit/Layout';
import { clearUser } from '../../store/user-slice';
import Menu from '../menu/Menu';

const Header = () => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const avatar = () => (user) ? <Avatar url={user?.image}/> : <Avatar monochrome size='s'/>
    const handleExit = () => {
        dispatch(clearUser())
    }

    return (
        <Layout>
            <Menu />
            {(user) ? 
                <>
                <NavLink to="/user" style={{padding: 5}}>
                    <Button label={`${user?.firstName} ${user?.lastName}`} form="round" view="secondary" iconLeft={avatar}></Button>
                </NavLink>
                <NavLink to="/login" onClick={handleExit} style={{padding: 5}}>
                    <Button label='Выход' form="round"></Button>
                </NavLink>
                </>
            :             
                <>
                <NavLink to="/login" style={{padding: 5}}>
                    <Button label='Гость' form="round" view="ghost" iconLeft={avatar}></Button>
                </NavLink>
                <NavLink to="/login" style={{padding: 5}}>
                    <Button label='Вход' form="round"></Button>
                </NavLink>
                </>
            }

        </Layout>
    );
}

export default Header;