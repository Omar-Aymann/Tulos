import { Box, Typography, Button } from "@mui/material";
import heroImage from '../assets/hero1.jpg';
export default function Hero() {
    return (
        <Box sx={{ height: '85vh', p: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'left', backgroundImage: 'url(' + heroImage + ')', backgroundSize: 'cover', borderRadius: '10px', backgroundPosition: 'center', position: 'relative'}}>
              <Box
    sx={{
      position: 'absolute', // Position absolute to cover the parent Box
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      bgcolor: 'rgba(153, 124, 86, 0.128)', // Dark beige color with opacity
      borderRadius: '10px', // Match the parent Box border radius
      zIndex: 0.5, // Ensure overlay is above the background image
    }}
  />
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'left', position: 'relative', zIndex: 2, p: '1rem' }}>
                <Typography gutterBottom variant="h2" sx={{ color: 'white', fontWeight: '700', }}>TULOS SPRING COLLECTION</Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <Typography variant="subtitle1" sx={{ color: 'white',textTransform: 'capitalize', lineHeight: '1.2', }}>Find out our best spring collection. Offering our best quality product in a Tolus <br /> Spring Collection.</Typography>
                <Button   variant="contained" sx={{ bgcolor: 'white', color: 'black', fontWeight: '600', fontSize: '0.8rem', px: '2.3rem', py: '0.4rem', borderRadius: '1.5rem'}}>Buy Now</Button>

                </Box>
            </Box>

        </Box>
    )
}