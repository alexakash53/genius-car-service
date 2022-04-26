import React from 'react';
import useServices from '../../Hooks/UseServices';


const ManageServices  = () => {
    const [services, setServices] = useServices();
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if(proceed){
             const url = `http://localhost:5000/service/${id}`;
             fetch(url, {
                 method: 'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                 console.log(data);
                 const remainning = services.filter(services => services._id !== id);
                 setServices(remainning); 
             })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Services </h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name} <button onClick={() => handleDelete(service._id)}>x</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageServices ;