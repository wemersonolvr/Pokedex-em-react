import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CharacterCard({ name, image }) {
    return (
        <Card
            sx={{
                maxWidth: 345,
                backgroundColor: '#e2e3d9', 
            }}
        >
            <CardActionArea>
                <CardMedia component="img" height="150" image={image} alt="" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
