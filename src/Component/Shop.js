import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeProduct from "./HomeProduct";
import "./Home.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

const Shop = () => {
  const [data, setData] = useState(HomeProduct);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (product) => {
    setSelectedProduct(product);
    handleClickOpen();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {selectedProduct ? selectedProduct.Name : ""}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {selectedProduct ? (
              <div>
                <img src={selectedProduct.img} alt={selectedProduct.Name}  style={{width:"400px" , height:"200px"}}/>
                <p>{selectedProduct.price}</p>
              </div>
            ) : null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      <div className="heading">
        <h1>#Shop</h1>
      </div>
      <div className="image-container">
        <img src="/image/shop.webp" alt="left-image" />
        <div className="contents">
          <ul>
            <Link a href="all">
              all
            </Link>
            <br />
            <br />
            <Link a href="all">
              Television
            </Link>
            <br />
            <br />
            <Link a href="all">
              Mobile
            </Link>
            <br />
            <br />
            <Link a href="all">
              speakers
            </Link>
            <br />
            <br />
            <Link a href="all">
              Electronics
            </Link>
            <br />
            <br />
            <Link a href="all">
              HeadSet
            </Link>
            <br></br>
          </ul>
        </div>
      </div>
      <div className="Mac-Product">
        <div className="heading">
          <h1>SHOP PRODUCT</h1>
          <div className="card">
            <div className="container">
              {data.map((product) => (
                <div
                  key={product.id}
                  className="card"
                  onClick={() => handleClick(product)}
                >
                  <img src={product.img} className="card-img-top" alt="..." />
                  <h5 className="card-title">{product.Name}</h5>
                  <p className="card-text">{product.price}</p>
                  
                </div>
                
              ))}
            </div>
          </div>
        </div>
        <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
      </div>
    </div>
  );
};

export default Shop;
