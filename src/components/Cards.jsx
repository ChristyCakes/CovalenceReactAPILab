import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Cards = (props) => {
    console.log(props)

    if (props) {


        // loop through each title, create a card for each
        // (props.filmInfo).forEach( => )
        // }
        return (
            <div>
                <h1>Titles</h1>
                <h1>{props.titles}</h1>
            </div>



            // <div>
            //     <Card >
            //         <CardContent>
            //             <Typography variant="headline">title</Typography>
            //             <Typography>Directed By:</Typography>
            //             <Typography color="textSecondary">description here</Typography>
            //         </CardContent>
            //     </Card>
            // </div>
        )
    } else {
        console.log('props not passing')
    }
}

export default Cards