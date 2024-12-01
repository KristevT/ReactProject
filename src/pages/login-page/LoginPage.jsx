import React, {useState} from 'react';
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });

    return (
        <form className="feedback-form">
            <TextField
                onChange={(value) => setFormData({...formData, login: value})}
                value={formData.login}
                name="login"
                type="text"
                label="Логин"
                placeholder="Введите логин"
            />
            <TextField
                onChange={(value) => setFormData({...formData, password: value})}
                value={formData.password}
                name="password"
                type="text"
                label="Пароль"
                placeholder="Введите пароль"
            />
            <Button label="Войти" />
            {/* <button className="button login__submit">
                <span className="button__text">Войти</span>
                <i className="button__icon fas fa-chevron-right"></i>
            </button> */}
        </form>
    )
}


export default LoginPage;