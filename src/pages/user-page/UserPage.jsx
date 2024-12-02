import { useSelector } from 'react-redux';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Text } from '@consta/uikit/Text';

const UserPage = function(){
    const user = useSelector(state => state.user.user) 
    return (
        <Grid gap="s" cols={4}>
            <GridItem row={5}>
                <img src={user?.image} alt='avatar'/>
            </GridItem>
            <GridItem col={3}>
                <Text>
                    <p> <Text size="2xl" weight="semibold"> Профиль </Text> </p>
                    <p> <b>Имя:ㅤㅤㅤ</b> {user?.firstName} </p>
                    <p> <b>Фамилия:ㅤ</b> {user?.lastName} </p>
                    <p> <b>Почта:ㅤㅤ</b> {user?.email} </p>
                </Text>
            </GridItem>
        </Grid>
    )
}

export default UserPage