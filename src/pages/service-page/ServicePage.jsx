import { ServicesListData } from "../../types/Services";
import { useEffect, useState } from "react";
import { getServicesListAction } from "../../store/api-actions";

const ServicePage = function(){
    const [services, setServices] = useState();
    useEffect(() => {
        async function fetchServices(){
            setServices(await getServicesListAction());
        }
        fetchServices()
    }, []);

    if (!services || services.length === 0) return <p>Нет данных.</p>

    return (
        <>
            {services.map(services => <ServicesListData
                key={services.name}
                name={services.name}
                description={services.description}
                image={services.image}
                createdAt={(new Date(services.createdAt)).toDateString()}/>)}
        </>
    )
}

export default ServicePage