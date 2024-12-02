import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import { Informer } from '@consta/uikit/Informer';
// import { saveToken } from '../../services/token';
// import { getAuthToken } from '../../store/api-actions';
import { signin } from '../../store/api-actions';
import { setUser } from '../../store/user-slice';


const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [status, setStatus] = useState(state => state)
    const [error, setError] = useState(error => error)

    const [username, setUsername] = useState(null);
    const handleUsernameChange = (value) => setUsername(value);
    const [password, setPassword] = useState(null);
    const handlePasswordChange = (value) => setPassword(value);


    function handleSignin(){
        signin({
            "username": username,
            "password": password
        }).then(resp => {
            if (resp.status === 200){
                let respData = resp.data
                console.log('Successful login!')
                setStatus('success')
                setError(undefined)
                dispatch(
                    setUser(
                        {
                            user: respData,
                            token: respData.accessToken
                        }
                    )
                )
                navigate("/")
            }
        }).catch(_=>{
            setStatus('alert')
            setError('alert')
        })
    }
    
    return (
        <div style={{padding: 5}}>
            <TextField
                onChange={handleUsernameChange}
                status={status}
                value={username}
                name="username"
                type="text"
                label="Логин"
                placeholder="Введите логин"
            />
            <p/>
            <TextField
                onChange={handlePasswordChange}
                status={status}
                value={password}
                name="password"
                type="text"
                label="Пароль"
                placeholder="Введите пароль"
            />
            <p/>
            {error && (
                <>
                    <Informer status="alert" title="Error" label='Username or password is incorrect' />
                    <p/>
                </>
            )}
            {(!username || !password) ? 
                <Button label="Войти" disabled/>
            : <Button label="Войти" onClick={handleSignin}/>}
        </div>
    )
}


export default LoginPage;