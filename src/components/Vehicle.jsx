import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Counter from './Counter.jsx';

const VehicleCard = ({name, description, vehicle_class})  => {

			return (
                <div >
                    <Card >
                        <CardContent>
                            <Typography variant="headline">{name}</Typography>
                            <Typography>{vehicle_class}</Typography>
                            <Typography color="textSecondary">{description}</Typography>
                        </CardContent>
                    </Card>
                </div>
            );
           };

const VehicleCards = ({vehicles, show}) => {

    if(!show)
        return (<div></div>);

    if(!vehicles)
        return null;

	return (
                <div>
                <Counter stuffType={"Vehicles"} number={vehicles.length} />
                <hr />
                { vehicles.map((vehicle) => (<VehicleCard key={vehicle.id} {...vehicle} />)) }   
                </div>
            );
}

export {
	VehicleCard,
	VehicleCards,
};