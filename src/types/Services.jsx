import { Card } from '@consta/uikit/Card';
import {Text} from '@consta/uikit/Text'

export const ServicesListData = function({name, description, image, createdAt}){
    return (
        <Card>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text size="xs" align="right" view="ghost">{createdAt}</Text>
            <img src={image} alt="img"/>
        </Card>
    )
}