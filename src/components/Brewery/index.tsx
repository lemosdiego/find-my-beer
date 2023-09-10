import { IBrewery } from "@/interface";
import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

interface Props {
  brewery: IBrewery
}

export const Brewery = ({ brewery }: Props) => (
  <Card sx={{ height: '100%', maxWidth: '296px' }} variant="outlined">
    <CardHeader
      title={brewery.name}
      subheader={brewery.address}
      titleTypographyProps={{ variant: 'h6' }}
      subheaderTypographyProps={{ variant: "subtitle2" }}
    />
    <CardMedia
      component="img"
      height="200"
      image={brewery.image}
      alt={brewery.name}
    />
    <CardContent>
      <Typography variant="subtitle2" color="text.secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit a nobis eum excepturi tempora ullam sequi aliquam at autem!
      </Typography>
    </CardContent>
  </Card>
)

