import { Box, Typography, TextField, Button, Link } from "@mui/material";
export default function Footer() {
    return (
    <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: {
                          xs: 'column', // For extra small screens (mobile)
                          sm: 'column', // For small screens (portrait tablets)
                          md: 'row',    // For medium screens (landscape tablets)
                          lg: 'row',    // For large screens (desktop)
            }, justifyContent: 'space-between', alignItems: 'center', width: '100%', p: '1rem',  }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: '',  width: '100%', p: '1rem', gap: '1rem', flexBasis: '30%' }}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%'}}>
                        <Typography variant="h2" sx={{ fontWeight: '900', color: 'black' }}>TULOS</Typography>
                        <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: '1.2', fontWeight: '600' }}>Get newsletter update for upcoming product <br />and best discount for all item</Typography>
                        </Box>
                        <Box sx={{display: 'flex', width: '100%', gap: '0.5rem'}}>
                        <TextField fullWidth size="small" id="outlined-basic" label="Email" variant="outlined"       sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',  // Customize the border radius here
        },}} />
                        <Button sx={{ bgcolor: 'black', color: 'white', fontWeight: '600', fontSize: '0.8rem', px: '2.5rem', py: '0.4rem', borderRadius: '1.5rem', width: 'fit-content'}}>Submit</Button>
                        </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', p: '1rem', gap: '0.5rem', flexBasis: '40%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                        <Typography variant="body1" sx={{ fontWeight: '900', color: 'black' }}>Product</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', width: '100%' }}>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Tshirt</Typography>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Jacket</Typography>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Shoes</Typography>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Pants</Typography>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Sunglasses</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                        <Typography variant="body1" sx={{ fontWeight: '900', color: 'black' }}>Categories</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', width: '100%' }}>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Man</Typography>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Woman</Typography>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Kids</Typography>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Gift</Typography>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>New Arrivals</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                        <Typography variant="body1" sx={{ fontWeight: '900', color: 'black' }}>Our Social Media</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', width: '100%' }}>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Facebook</Typography>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Instagram</Typography>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Youtube</Typography>
                            <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Twitter</Typography>
                        </Box>
                    </Box>
            </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: {
                          xs: 'column-reverse', // For extra small screens (mobile)
                          md: 'row',    // For medium screens (landscape tablets)
                          lg: 'row',    // For large screens (desktop)
            }, justifyContent: {xs: 'center',md:'space-between'}, textAlign: {xs: 'center',md:'left'}, p: '1rem', gap: '0.5rem', bgcolor: 'background.paper', px: '2rem' }}>
            <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: '600', }}>© 2024 Production.</Typography>
            <Box sx={{ display: 'flex', flexDirection: {
                          xs: 'column', // For extra small screens (mobile)
                          sm: 'column', // For small screens (portrait tablets)
                          md: 'row',    // For medium screens (landscape tablets)
                          lg: 'row',    // For large screens (desktop)
            }, gap: '0.5rem' }}>
                <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: '600', }}>Privacy Policy</Typography>
                <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: '600', }}>Terms & Conditions</Typography>
                <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: '600', }}>FAQ</Typography>
            </Box>

        </Box>
        <Box sx={{ display: 'flex', flexDirection: {
                          xs: 'column', // For extra small screens (mobile)
                          sm: 'column', // For small screens (portrait tablets)
                          md: 'row',    // For medium screens (landscape tablets)
                          lg: 'row',    // For large screens (desktop)
        }, justifyContent: 'center', textAlign: 'center', p: '1rem', gap: '0.5rem', px: '2rem' }}>
            <Typography variant="subtitle1" sx={{ color: 'black', fontWeight: '600', }}>Designed by <Link href="https://dribbble.com/odamastudio">Odama</Link></Typography>
            <Typography variant="subtitle1" sx={{ color: 'black', fontWeight: '600', }}>Developed by <Link href="https://github.com/Omar-Aymann">Omar</Link></Typography>
    </Box>
    </Box>
    )
}