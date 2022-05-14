import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function ProductItem(props) {
  const data = props.data;
  return (
    <Card
    sx={{minHeight:'515px'}}
    className='border'
    >
      <CardMedia
        component="img"
        image={data.image}
        alt="Shop giày"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body1" className="fw-bold" color="text.secondary">
          {data.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="bg-dark text-white px-2">Add to Cart
          <ShoppingCartIcon className="ms-2"/>
        </Button>
      </CardActions>
    </Card>
  );
}

ProductItem.propTypes = {};

export default ProductItem;
