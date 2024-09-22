import { Button, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

export default function Banner() {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', gap: 1, bgcolor: 'background.default', border: 'hidden', boxShadow: 'none', }}>
            <CardMedia sx={{ width: '100%', objectFit: 'cover', borderRadius: '1.5rem', height: '20rem'}} component="img" src="/wedding.webp" />
            <CardContent sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center', gap: 3}}>
                <Box>
                <Typography variant="h4" sx={{fontWeight: '700', textTransform: 'uppercase'}}>Wear To Wedding</Typography>
                <Typography variant="subtitle2" sx={{color: 'gray',  fontWeight: '500'}}>A symphony of exquisite designs foilored for your unforgettable moments</Typography>

                </Box>
                <Button variant="contained" sx={{ bgcolor: 'black', color: 'white', fontWeight: '600', fontSize: '0.8rem', px: '2.5rem', py: '0.4rem', borderRadius: '1.5rem', width: 'fit-content'}}>See Details</Button>
            </CardContent>
        </Card>

    )
}