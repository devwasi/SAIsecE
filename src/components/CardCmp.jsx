// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { useNavigate } from "react-router-dom";

// function CardCmp({ image, title, desc, id }) {
//   const navigate = useNavigate();
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={image} />
//       <Card.Body>
//         <Card.Title> {title} </Card.Title>
//         <Card.Text>{desc?.slice(0, 50)}</Card.Text>
//         <Button
//           variant="primary"
//           onClick={() => {
//             navigate(`/productdetails/${id}`);
//           }}
//         >
//           Go somewhere
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardCmp;


import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom/dist';

export default function CardCmp({image, title, desc,id, price}) {
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 295 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          sx={{
            objectFit: "contain"
          }}
          image={image}
          alt={title}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc?.slice(0,50)}
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardActions>
        <Button size="small" color="primary"
        onClick={() => {
                      navigate(`/productdetails/${id}`);
                    }}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
