import { ServicesListData } from "../../types/Services";
import { Grid } from '@consta/uikit/Grid';
import { useEffect, useState } from "react";
import { getServicesListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';
import { Layout } from "@consta/uikit/Layout";

const ServicePage = function(){
    const [services, setServices] = useState();
    useEffect(() => {
        async function fetchServices(){
            setServices(await getServicesListAction());
        }
        fetchServices()
    }, []);

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