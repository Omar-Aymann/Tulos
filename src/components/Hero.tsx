import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import heroImage from '../assets/hero1.webp';
export default function Hero() {
    const theme = useTheme();

    // Define media queries for different breakpoints
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));   // Mobile
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Tablet
  
    // Decide the typography variant based on screen size
    const variant = isSmallScreen ? 'h4' : isMediumScreen ? 'h3' : 'h2'; 
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
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: {xs: 'center', md:'flex-start', lg: 'flex-start', xl: 'flex-start'}, position: 'relative', zIndex: 2, p: '1rem', textAlign: {xs: 'center', md:'left', lg: 'left', xl: 'left'},  }}>
                <Typography variant={variant} gutterBottom  sx={{ color: 'white', fontWeight: '700'}}>TULOS SPRING COLLECTION</Typography>
                <Box sx={{display: 'flex', flexDirection: {
                          xs: 'column', // For extra small screens (mobile)
                          sm: 'column', // For small screens (portrait tablets)
                          md: 'row',    // For medium screens (landscape tablets)
                          lg: 'row',    // For large screens (desktop)
            }, justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '0.5rem'}}>
                <Typography variant="subtitle1" sx={{ color: 'white',textTransform: 'capitalize', lineHeight: '1.2', }}>Find out our best spring collection. Offering our best quality product in a Tolus <br /> Spring Collection.</Typography>
                <Button   variant="contained" sx={{ bgcolor: 'white', color: 'black', fontWeight: '600', fontSize: '0.8rem', px: '2.3rem', py: '0.4rem', borderRadius: '1.5rem'}}>Buy Now</Button>

                </Box>
            </Box>

        </Box>
    )
}