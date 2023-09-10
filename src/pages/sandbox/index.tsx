import { Breweries } from "@/containers/Breweries"
import { AppBar, Box, Grid, Toolbar } from "@mui/material"
import { Map, Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const SandBox = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>

        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={8} >
          <Box height="100%" width="100%" position="fixed" left="-33%" bottom="0%">
            <Map
              mapboxAccessToken="pk.eyJ1IjoibGVtb3N4ZDAxIiwiYSI6ImNsbTlnOWc4eDA0MmMzdHFpZ3B0eGppNDEifQ.C4h4IH0Pv2lBff4b3SbuBQ"
              initialViewState={{
                latitude: -23.5299447,
                longitude: -46.7453826,
                zoom: 14
              }}
              mapStyle="mapbox://styles/mapbox/streets-v12"
            >
              <Marker latitude={-23.535442} longitude={-46.726740} />
            </Map>
          </Box>
        </Grid>
        <Grid item xs={4} paddingTop={10} paddingLeft={3} paddingRight={1}>
          <Breweries />
        </Grid>
      </Grid>
    </>
  )
}
export default SandBox