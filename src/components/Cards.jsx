import React from 'react';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Cards = (props) => {

    if (props.titles) {
        console.log(props.titles)
    }


    return (
        <div>
            <Card >
                <CardContent>
                    <Typography color="textSecondary">
                        movie title here
              </Typography>
              </CardContent>
              </Card>
        </div>
                )
  }
  
export default Cards