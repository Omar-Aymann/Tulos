import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useState } from "react";
interface ProductProps {
    title: string;
    img: string;
    desctiption: string;
    price: string;
  }
export default function Product({title, img, desctiption, price} : ProductProps) {
    return (
            <Card  sx={{ bgcolor: 'background.default', border: 'hidden', boxShadow: 'none', p: '1rem', borderRadius: '1.5rem', }}>
                <CardActionArea>
                    <CardMedia 
                    component={'img'}
                    src={img}
                    sx={{  width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '1.5rem', }}
/>
                <CardContent sx={{p: 0, py: '5px'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '0.1rem', mb: '0.5rem', p: '0.5rem'}}>
                    <Typography  variant="h6" sx={{ fontWeight: '700', }} >
                        {title}
                    </Typography>
                    <Typography variant="caption" sx={{fontWeight: 'bold'}} color="text.secondary">
                        {desctiption}
                    </Typography>

                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: '700', p: '0.5rem'}}>
                        {price}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
    );
}