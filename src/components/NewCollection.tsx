import { Box, Grid2, Typography } from "@mui/material";
import Product from "./Product";
export default function NewCollection() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column',}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', gap: 1.5}}>
                <Typography variant="h4" sx={{  fontWeight: '700', }}>NEW COLLECTION</Typography>
                <Typography variant="subtitle2" sx={{ color: 'gray', textAlign: 'center', lineHeight: '1.2', fontWeight: '500' }}>Our Latest Collection Where Classic and Contemporary styles converge in <br /> perfect harmony</Typography>
            </Box>
            <Grid2 container  spacing={2}>
                <Grid2 size={{ xs: 12, md: 4}}>
                <Product title="White T-Shirt" desctiption="Classic White T-Shirt" price="$20" img="/whitet.webp" />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4}}>
                <Product title="Brown Leather Jacket" desctiption="Natural Brown Leather Jacket" price="$70" img="/jacket.webp" />

                </Grid2>
                <Grid2 size={{ xs: 12, md: 4}}>
                <Product title="Blundstone Shoes" desctiption="Blundstone Classic Boot" price="$95" img="/Blundstone.webp" />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4}}>
                <Product title="Bomber Jacket" desctiption="Bomber Classic Jacket" price="$65" img="/bomber.webp" />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4}}>
                <Product title="Women Black Boot" desctiption="Classic Women Boot" price="$65" img="/blackboot.webp" />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4}}>
                <Product title="Buttonless Polo T-Shirt" desctiption="Classic Polo T-Shirt" price="$110" img="/pants.webp" />
                </Grid2>



            </Grid2>
        </Box>
    )
}