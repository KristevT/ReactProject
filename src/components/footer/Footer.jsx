import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text'
import React from 'react';

const Footer = () => {
    return (
        <Layout>
            <div>
                <Text size="xs" align="right" view="ghost">© 2024 Моя Компания</Text>
            </div>
        </Layout>
    )
}

export default Footer;