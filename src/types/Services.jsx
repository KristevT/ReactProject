import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text'
import { Avatar } from '@consta/uikit/Avatar';
import { GridItem } from '@consta/uikit/Grid';

export const ServicesListData = function({name, description, image, createdAt}){
    return (
        <GridItem>
            <Card verticalSpace="m" horizontalSpace="m">
                <Text weight="semibold">{name}</Text>
                <Text>{description}</Text>
                <Avatar url={image} name="service-image" size="l"/>
                <Text size="xs" align="right" view="ghost">{createdAt}</Text>
            </Card>    
        </GridItem>
    )
}