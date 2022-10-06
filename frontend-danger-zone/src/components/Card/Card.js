import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

//https://mui.com/material-ui/react-card/

export default function ActionAreaCard({image, title, subtitle, description}) {
    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => navigate('/details', {
                        state: { image: image, title: title, subtitle: subtitle, description: description  },
                    })}>Let's get dangerous</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
