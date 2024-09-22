import { Box, Typography, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

export default function Nav() {
    return (
        <AppBar position='static' elevation={0} sx={{ bgcolor: '#fff', color: 'black' }}>
            <Toolbar sx={{ 
                display: 'flex', 
                flexDirection: {
                    xs: 'column',  // For extra small screens (mobile)
                    sm: 'column',  // For small screens (portrait tablets)
                    md: 'row',     // For medium screens (landscape tablets)
                    lg: 'row',     // For large screens (desktop)
                },
                justifyContent: 'space-between', 
                alignItems: 'center', 
                fontWeight: 'bold' 
            }}>
                {/* Navigation Links */}
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',  // For extra small screens (mobile)
                        sm: 'column',  // For small screens (portrait tablets)
                        md: 'row',     // For medium screens (landscape tablets)
                        lg: 'row',     // For large screens (desktop)
                    },
                    gap: 0.1, 
                    flexBasis: '33.33%', 
                    order: { xs: 2, sm: 2, md: 1 },  // Links come second on mobile, first on larger screens
                }}>
                    <Button color="inherit" disableRipple sx={{'&:hover': {backgroundColor: 'transparent'}, fontWeight: 'inherit'}}>Men</Button>
                    <Button color="inherit" disableRipple sx={{'&:hover': {backgroundColor: 'transparent'}, fontWeight: 'inherit'}}>Women</Button>
                    <Button color="inherit" disableRipple sx={{'&:hover': {backgroundColor: 'transparent'}, fontWeight: 'inherit'}}>Kids</Button>
                    <Button color="inherit" disableRipple sx={{'&:hover': {backgroundColor: 'transparent'}, fontWeight: 'inherit'}}>New & Featured</Button>
                    <Button color="inherit" disableRipple sx={{'&:hover': {backgroundColor: 'transparent'}, fontWeight: 'inherit'}}>Gift</Button>
                </Box>

                {/* Logo */}
                <Typography 
                    variant="h4" 
                    sx={{ 
                        textAlign: 'center', 
                        fontWeight: 'bold', 
                        flexBasis: '33.33%', 
                        order: { xs: 1, sm: 1, md: 2 },  // Logo comes first on mobile, second on larger screens
                    }}
                >
                    TULOS
                </Typography>

                {/* Search and Cart Icons */}
                <Box sx={{ 
                    display: 'flex', 
                    gap: 1, 
                    justifyContent: 'flex-end', 
                    alignItems: 'center', 
                    flexBasis: '33.33%', 
                    order: { xs: 3, sm: 3, md: 3 },  // Icons come last
                }}>
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                    <Button color="inherit" disableRipple sx={{ textAlign: 'center', fontWeight: 'bold' }}>Login</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
