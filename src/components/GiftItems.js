import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
export const GiftItems = ({url,id,title}) => {
    
    return (
        // <div className="card animate__animated animate__jackInTheBox">
        //     <img
        //     src={url}
        //     alt={title}
        //     />
        //     <h3>{title}</h3>
        // </div>
        <Card className="animate__animated animate__jackInTheBox">
        <CardMedia
        height="380"
        component="img"
          image={url}
          alt="Contemplative Reptile"
        /> 
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
            </CardContent> 
         </Card>
    )
}
