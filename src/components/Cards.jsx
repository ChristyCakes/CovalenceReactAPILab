import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Cards = (props) => {
    let filmCards;
    if (props.filmInfo) {

        // loop through each film object, create a card for each
        filmCards = (props.filmInfo).map(obj => {
            return (
                <div key={obj.key}>
                    <Card >
                        <CardContent>
                            <Typography variant="headline">{obj.title}</Typography>
                            <Typography>Directed By: {obj.director}</Typography>
                            <Typography color="textSecondary">{obj.description}</Typography>
                        </CardContent>
                    </Card>
                </div>
            )
        })
    }
    return (
        <div>{filmCards}</div>
    )
}

export default Cards