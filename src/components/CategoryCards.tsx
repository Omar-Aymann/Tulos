import { Grid2 } from "@mui/material";
import CatCard from "./CatCard";

export default function CategoryCards() {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={4}>
                <CatCard img="/man.webp" title="Men" />
            </Grid2>
            <Grid2 size={4}>
                <CatCard img="/woman.webp" title="Women" />
            </Grid2>
            <Grid2 size={4}>
                <CatCard img="/kid.webp" title="Kids" />
            </Grid2>
        </Grid2>
    )
}