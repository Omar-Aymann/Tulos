import {Box, Button, Typography} from "@mui/material";
interface CatCardProps {
    img: string,
    title: string,

}
export default function CatCard({img, title} : CatCardProps) {
    
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'left', gap: 1, backgroundImage: 'url(' +  img + ')', backgroundSize: 'cover', borderRadius: '1.5rem', backgroundPosition: 'center', position: 'relative', width: '100%', aspectRatio: '9.99/10', p: '2rem'}}>
            <Typography variant="h4" sx={{color: 'white', fontWeight: '700', textTransform: 'uppercase'}}>{title}</Typography>
            <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', fontWeight: '600', fontSize: '0.8rem', px: '2.5rem', py: '0.4rem', borderRadius: '1.5rem', width: 'fit-content'}}>See Details</Button>
        </Box>
    )
}