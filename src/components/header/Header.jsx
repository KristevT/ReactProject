import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { User } from '@consta/uikit/User';
import { Layout } from '@consta/uikit/Layout';
import { clearUser } from '../../store/userSlice';
import Menu from '../menu/Menu';

const Header = () => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const handleExit = () => {
        dispatch(clearUser())
    }

    return (
        <Layout flex={1} horizontalAlign='right'>
            <Menu />
            {(user) ? 
                <>
                <NavLink to="/user" style={{padding: 5}}>
                    <User name={`${user?.firstName} ${user?.lastName}`} avatarUrl={user?.image} size='l' view='ghost'/>
                </NavLink>
                <NavLink to="/login" onClick={handleExit} style={{padding: 5}}>
                    <Button label='Выход' view='ghost' form='round'></Button>
                </NavLink>
                </>
            :             
                <>
                <NavLink to="/login" style={{padding: 5}}>
                    <Button label='Вход' view='ghost' form='round'></Button>
                </NavLink>
                </>
            }
        </Layout>
    );
}

export default Header;