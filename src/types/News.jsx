import { Card } from '@consta/uikit/Card';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text'

export const NewsListData = function({name, description, createdAt}){
    return (
        <Layout direction="column" style={{maxWidth: "1000px"}}> 
            <Card verticalSpace="m" horizontalSpace="m">
                <Text weight="semibold">{name}</Text>
                <hr />
                <Text>{description}</Text>
                <Text size="xs" align="right" view="ghost">{createdAt}</Text>
            </Card>
        </Layout>
    )
}