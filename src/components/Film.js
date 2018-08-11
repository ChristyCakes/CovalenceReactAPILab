import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Counter from './Counter.jsx';


// Individual card for a film
const FilmCard = ({key, title, director, description})  => {  // should key be id?

			return (
                <div key={key}>
                    <Card >
                        <CardContent>
                            <Typography variant="headline">{title}</Typography>
                            <Typography>Directed By: {director}</Typography>
                            <Typography color="textSecondary">{description}</Typography>
                        </CardContent>
                    </Card>
                </div>
            );
           };

// Set of film cards
const FilmCards = ({films, show}) => {

    if(!show) // don't need brackets here?
        return (<div></div>); // return empty div instead of null to make a change

    if(!films)
        return null;

	return (
                <div>
                { /*Show counter with number of films */} 
                <Counter stuffType={"Films"} number={films.length} />
                { /*map over list of films and pass data to FilmCard component above*/} 
                <hr />
                { films.map((film) => (<FilmCard {...film} />)) }   
                { /* ? getting key error on this line even though we set keys after passing data */}
                </div>
            );
}

export {
	FilmCard,
	FilmCards,
};