import { useSelector } from 'react-redux';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';

const UserPage = function(){
    const user = useSelector(state => state.user.user) 
    return (
        <Card verticalSpace='xs' horizontalSpace='m'>
            <Grid gap="s" cols={4}>
                <GridItem row={5}>
                    <img src={user?.image} alt='avatar'/>
                </GridItem>
                <GridItem col={3}>
                    <Text>
                        <p> 
                            <Text size="2xl" weight="semibold"> Профиль </Text> <br/>
                            <b>Имя:     </b> {user?.firstName} <br/>
                            <b>Фамилия: </b> {user?.lastName} <br/>
                            <b>Почта:   </b> {user?.email} <br/>
                        </p>
                    </Text>
                </GridItem>
            </Grid>
        </Card>
    )
}

export default UserPage