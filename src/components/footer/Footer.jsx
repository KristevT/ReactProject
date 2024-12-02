import { Text } from '@consta/uikit/Text'
import React from 'react';
import Menu from '../menu/Menu';

const Footer = () => {
    return (
        <footer>
            <Menu/>
            <Text size="xs" align="right" view="ghost">© 2024 Моя Компания</Text>
        </footer>
    )
}

export default Footer;