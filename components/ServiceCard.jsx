import React from 'react';

const ServiceCard = ({service, description}) => {
    return (
        <div>
            <h3>{service}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard;