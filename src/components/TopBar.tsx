import { Box, Typography } from '@mui/material';
export default function TopBar() {
    return (
        <Box sx={{ bgcolor: 'background.paper', display: 'flex', justifyContent: 'center', p: 1, width: '100%', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>Get 25% off This Summer Sale: Grab it Fast!!</Typography>
        </Box>
    )
}