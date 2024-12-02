import { ServicesListData } from "../../types/Services";
import { Grid } from '@consta/uikit/Grid';
import { useEffect, useState } from "react";
import { getServicesListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';
import { Layout } from "@consta/uikit/Layout";
import { useDispatch, useSelector } from "react-redux";
import { setServicesState } from "../../store/servicesSlice";

const ServicePage = function(){
    const dispatch = useDispatch()
    const [services, setServices] = useState(useSelector(state => state.services.value));
    useEffect(() => {
        getServicesListAction().then(resp=>{
            setServices(resp)
            dispatch(setServicesState(resp))
        })
    }, [dispatch]);

    return (
        <Layout direction="column" style={{maxWidth: "1200px", minHeight: "100vh"}}>  
            <Grid cols={3} gap="xl">
                {services ? (
                    services.map(services => <ServicesListData
                    key={services.name}
                    name={services.name}
                    description={services.description}
                    image={services.image}
                    createdAt={(new Date(services.createdAt)).toDateString()}/>)
                ) : (
                    <Loader/>
                )}  
            </Grid>
        </Layout>
    )
}

export default ServicePage