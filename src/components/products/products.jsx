import { Box, Card, IconButton, Snackbar, SnackbarContent, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Divider from '@mui/material/Divider';
import React, { useEffect, useState } from 'react'
import "./products.css"
import CloseIcon from '@mui/icons-material/Close';

import Img1 from '../../assets/image 18.png'
import Img2 from '../../assets/image 19.png'
import Img3 from '../../assets/image 20.png'


const Product = [

    {
        id: 1,
        img: Img2,
        name: 'Product-1',
        price: 50
    },
    {
        id: 2,
        img: Img1,
        name: 'Product-2',
        price: 30
    },
    {
        id: 3,
        img: Img3,
        name: 'Product-3',
        price: 40
    },

]

const Products = () => {

    let [cartList, setCartList] = useState([])
    console.log(cartList);

    const [openAlert, setOpenAlert] = useState(false)


    const cartHandler = (item) => {
        const isExist = cartList.find((product) => product.id === item.id)


        if (!isExist) {
            setCartList((prev) => [...prev, item])
        } else {
            setOpenAlert(true)
        }


    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    useEffect(()=>{

        let strCartItems = JSON.stringify(cartList)

        localStorage.setItem("cartItem", strCartItems )
    },[cartList])
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <SnackbarContent
                    style={{ backgroundColor: "#bb2124" }}
                    message= {
                    <>
                       <span id='client-snackbar'>This product is already exist</span>
                        <CloseIcon sx={{marginLeft:'50px'}} onClick={handleClose}/>
                    </>}
                />
            </Snackbar>
            <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexWrap: 'wrap', marginTop: '30px', }}>
                {Product?.map((item, index) => {

                    return (
                        <Card className='Card mt-4' key={index} sx={{ margin: "0px 40px" }}>
                            <img src={item.img} alt={`${item.name}`} />
                            <Typography variant='h5' className='mt-2'>{item.name}</Typography>
                            <Typography variant='body2'>{item.price}</Typography>
                            <Divider sx={{ borderColor: "black" }} />
                            <Box className="d-flex justify-content-around my-3">
                                <ShareIcon className='icon' />
                                <FavoriteIcon className='icon' />
                                <AddShoppingCartIcon className='icon' onClick={() => cartHandler(item)} />
                            </Box>

                        </Card>
                    )


                })}
            </Box>

        </>
    )
}

export default Products