import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Tabs } from '@consta/uikit/Tabs';
import { Layout }  from '@consta/uikit/Layout'

const items = [
    { label: "Главная страница", link: "/" },
    { label: "Услуги компании", link: "/services" },
];

const Menu = () => {
    const [value, setValue] = useState(items[0]);
    const navigate = useNavigate();
    return (
        <Layout flex={1}>
            <Tabs
                value={value}
                onChange={(item) => {
                    setValue(item);
                    navigate(item.link);
                }}
                items={items}
                fitMode="scroll"
                view="clear"
                style={{padding: 5}}
            />
        </Layout>
    );
}

export default Menu;