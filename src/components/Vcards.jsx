import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Vcards = (props) => {
    let vehicleCards;
    if (props.vehicleInfo) {

        vehicleCards = (props.vehicleInfo).map(obj => {
            return (
                <div key={obj.key}>
                    <Card >
                        <CardContent>
                            <Typography variant="headline">{obj.name}</Typography>
                            <Typography>{obj.description}</Typography>
                            <a target="_blank" href={obj.films}>Featured in this Film</a>
                        </CardContent>
                    </Card>
                </div>
            )
        })
    }
    return (
        <div>{vehicleCards}</div>
    )
}

export default Vcards