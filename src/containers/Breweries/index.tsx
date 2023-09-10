import { Brewery } from "@/components/Brewery";
import { breweries } from "@/services";
import { Grid } from "@mui/material";


export const Breweries = () => (
  <Grid container spacing={2} >
    {breweries.map((brewery, key) => (
      <Grid item xs={12} md={6} key={key}>
        <Brewery brewery={brewery} />
      </Grid>
    ))}
  </Grid>
)