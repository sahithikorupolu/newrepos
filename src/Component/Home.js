import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FaEye, FaHeart } from "react-icons/fa";


import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import { Construction, Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";


import HomeProduct from './HomeProduct';
import OfferProduct from './OfferProduct';






const Home = () => {
  const [category, setCategory] = useState('new');
  const[search, setSearch] = useState('');
  const[filterItems,setFilterItems] = useState([]);

  const handleSubmit = (search) => {
    setSearch(search);

    const filteredOfferProducts = offerProducts.filter((product)=> product.Name.toLowerCase().includes(search.toLowerCase));
    setFilterItems(filteredOfferProducts);
    
  }
  
 
  const [homeProducts, setHomeProducts] = useState(
    HomeProduct.map((product) => ({ ...product, clicked: false }))
  );

  const [offerProducts, setOfferProducts] = useState(
    OfferProduct.map((product) => ({ ...product, clicked: false }))
  );

  const handleClick = (id) => {
    const updatedProducts = homeProducts.map((product) =>
      product.id === id ? { ...product, clicked: !product.clicked } : product
    );
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    setHomeProducts(updatedProducts);
  };

  const handleAddToCart = (id) => {
    const updatedProducts = offerProducts.map((product) =>
      product.id === id ? { ...product, clicked: !product.clicked } : product
    );
    localStorage.setItem('offerProducts', JSON.stringify(updatedProducts));
    setOfferProducts(updatedProducts);
  };

  const filteredProducts = homeProducts.filter((product) => {
    if (category === 'new') return product.type === 'new';
    if (category === 'Featured') return product.type === 'Featured';
    if (category === 'top') return product.type === 'top';
    return true;
  });
  
 

  
  return (
    <div>
      <div className='home'>
        <div className='top_banner'>
          <div className='content'>
            <h3>Silver aluminum</h3>
            <h2>Apple Watch</h2>
            <p>30% off our first order</p>
            <Link to='/Shop' className='link'>
              Shop Now
            </Link>
          </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <p>Trending Products</p>
                </div>
                <div className='cate'>
                  <div className='cate-list'>
                    <h3 onClick={() => setCategory('new')}>New</h3>
                    <h3 onClick={() => setCategory('Featured')}>Featured</h3>
                    <h3 onClick={() => setCategory('top')}>TopSelling</h3>
                  </div>
                </div>
              </div>
              <div className='product'>
                <div className='container'>
                  {filteredProducts.map((curElm) => (
                    <div className='box' key={curElm.id}>
                      <div className='img_box'>
                        <img src={curElm.img} alt='trend' />
                        <h3>{curElm.Name}</h3>
                        <p>{curElm.price}</p>
                        <button
                          onClick={() => handleClick(curElm.id)}
                          style={{
                            backgroundColor: curElm.clicked ? '#e74c3c' : '#3498db',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          {curElm.clicked ? 'Added To Cart' : 'Not In Cart'}
                        </button>
                        <div className='icon'>
                          <div className='icon-box'>
                            <FaEye />
                            <div className='heart'>
                              <FaHeart />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='laptops'>
              <img src='https://cdn.grabon.in/gograbon/images/web-images/uploads/1621489046640/hpshopping-discount-codes.jpg' style={{width:'50%', height:'200px'}} alt="laptop1" />
              <img src='https://exchange4media.gumlet.io/news-photo/122341-one.jpg?w=400&dpr=2.6' alt='laptop' style={{width:'50%', height:'200px'}} />
              <img src='https://cdn.grabon.in/gograbon/images/web-images/uploads/1593772959236/oppo-offers.jpg' style={{width:'50%', height:'200px'}} alt="laptop3" />
            </div>
            <div className='offers'>
              <h2>Today's Offer</h2>
              <div className='product'>
                <div className='container'>
               
                  {offerProducts.map((value) => (
                    <div className='box' key={value.id}>
                      <div className='img_box'>
                        <img src={value.img} alt='trend' style={{ height: '200px', objectFit: 'cover', width: '300px' }}/>
                        <h3>{value.Name}</h3>
                        <p>{value.price}</p>
                        <button
                          onClick={() => handleAddToCart(value.id)}
                          style={{
                            backgroundColor: value.clicked ? '#e74c3c' : '#3498db',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          {value.clicked ? 'Added To Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
  );
};

export default Home;
