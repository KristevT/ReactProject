import { Button } from '@consta/uikit/Button'
import React, { useState } from 'react';

const MainPage = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Главная страница {count}</div>
            
        </>
    )
}

export default MainPage;