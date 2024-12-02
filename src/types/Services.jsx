import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text'
// import { Avatar } from '@consta/uikit/Avatar';
import { Grid, GridItem } from '@consta/uikit/Grid';

// export const ServicesListData = function({name, description, image, createdAt}){
//     return (
//         <GridItem>
//             <Card verticalSpace="m" horizontalSpace="m">
//                 <Text weight="semibold">{name}</Text>
//                 <Text>{description}</Text>
//                 <Avatar url={image} name="service-image" size="l"/>
//                 <Text size="xs" align="right" view="ghost">{createdAt}</Text>
//             </Card>    
//         </GridItem>
//     )
// }

export const ServicesListData = function({name, description, image, createdAt}){
    return (
        <GridItem>
            <Card verticalSpace="m" horizontalSpace="m">
                <Grid cols={3} gap="l">
                    <GridItem>
                        <img src={image} alt="service-image" width="100" height="100" style={{borderRadius: "5px"}}></img>
                    </GridItem>
                    <GridItem col={2}>
                        <Text weight="semibold">{name}</Text>
                        <Text>{description}</Text>
                    </GridItem>
                </Grid>
                <Text size="xs" align="right" view="ghost">{createdAt}</Text>
            </Card>    
        </GridItem>
    )
}
