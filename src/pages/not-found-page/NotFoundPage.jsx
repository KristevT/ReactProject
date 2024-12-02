import { Responses404 } from '@consta/uikit/Responses404'
import { Button } from '@consta/uikit/Button'
import { NavLink } from 'react-router-dom';
import React from "react";

const NotFoundPage = () => {
  return (
    <Responses404 actions={
        <NavLink to="/">
            <Button label='Вернуться назад' view="ghost"></Button>
        </NavLink>
    }
    />
  );
};

export default NotFoundPage;