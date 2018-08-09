import React from 'react';
import Vcards from './Vcards.jsx'

const Vehicles = (props) => {
    let vehicleInfo = [];
    
    if (props.vehiclesArray && props.show) {

        for (let i of props.vehiclesArray) {
            i = {
                key: i.id,
                name: i.name,
                description: i.description,
                films: i.films,
            }

            vehicleInfo.push(i);
        }
    }
    return <Vcards vehicleInfo={vehicleInfo}/>
}

export default Vehicles;