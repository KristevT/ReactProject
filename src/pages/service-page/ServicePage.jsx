import { ServicesListData } from "../../types/Services";
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
        </>
    )
}

export default ServicePage