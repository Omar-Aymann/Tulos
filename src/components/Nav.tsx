import { Box, Typography, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
export default function Nav() {
    return (
        <AppBar position='static' elevation={0} sx={{ bgcolor: '#fff', color: 'black', }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}>
                <Box sx={{ display: 'flex', gap: 0.1, flexBasis: '33.33%' }}>
                    <Button color="inherit" disableRipple sx={{'&:hover': {backgroundColor: 'transparent'}, fontWeight: 'inherit'}}>Men</Button>
                    <Button color="inherit" disableRipple sx={{'&:hover': {backgroundColor: 'transparent'}, fontWeight: 'inherit'}}>Women</Button>
                    <Button color="inherit" disableRipple sx={{'&:hover': {backgroundColor: 'transparent'}, fontWeight: 'inherit'}}>Kids</Button>
                    <Button color="inherit" disableRipple sx={{'&:hover': {backgroundColor: 'transparent'}, fontWeight: 'inherit'}}>New & Featured</Button>
                    <Button color="inherit" disableRipple sx={{'&:hover': {backgroundColor: 'transparent'}, fontWeight: 'inherit'}}>Gift</Button>
                </Box>
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', flexBasis: '33.33%' }}>TULOS</Typography>
                <Box sx={{ display: 'flex', gap:1, justifyContent: 'flex-end', alignItems: 'center', flexBasis: '33.33%' }}>
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
    )
}