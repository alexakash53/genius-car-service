import React,{useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';


const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect( () =>{
        const url = `http://localhost:5000/service/626642262181da749f2b0b0d`;

        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));
    }, []);

    return (
        <div>
            <h2>You Are About To Book: {service.name}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;