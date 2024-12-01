import { ServicesListData } from "../../types/Services";
import { Grid } from '@consta/uikit/Grid';
import { useEffect, useState } from "react";
import { getServicesListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';

const ServicePage = function(){
    const [services, setServices] = useState();
    useEffect(() => {
        async function fetchServices(){
            setServices(await getServicesListAction());
        }
        fetchServices()
    }, []);

    return (
        <>  
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
        </>
    )
}

export default ServicePage