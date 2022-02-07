import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import db from '../../components/db'
import { Box, Button, Divider, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Cuisine() {
    const router = useRouter()
    const {id} = router.query
    const [cuisine, setCuisine] = useState(null)
    const [foods, setFoods] = useState(null)
    useEffect(()=>{
        setCuisine(
            db['cuisines'].filter(ele=>ele.id == id)[0]
        )
        setFoods(
            db['foods'].filter(ele=>ele.cuisine_id == id)
        )
    }, [id])
    return (
        <div>
            {
                console.log(foods)
            }
            {
                cuisine
                ?
                <>
                    <Box sx={{width:'100%', height:'200px',backgroundColor:'beige'}}>
                        <Box sx={{width:'70%', height:'200px', overflowY:'hidden',backgroundColor:'beige'}}>
                            {/* <Image src={cuisine.pic} layout='fill' /> */}
                        </Box>
                    </Box>
                    {/* food list */}
                    <Box sx={{width:'750px', margin:'auto', backgroundColor:''}}>
                        {
                            foods.map((ele, index)=>
                                /* food card */
                                <Box key={index} className="foodcard">
                                    <Typography variant='h4' align='center' sx={{fontWeight:100, marginBottom:2}}>
                                        {ele.name}
                                    </Typography>
                                    <Box sx={{
                                        width: '640px',
                                        height: '360px',
                                        backgroundImage: 'aquamarine',
                                        margin: 'auto',
                                        marginBottom:2
                                    }}>
                                     <Image src={ele.pic}  width='630' height='360'/>
                                        
                                    </Box>
                                    <Box sx={{margin: 'auto', marginBottom:2, width: '640px', padding:2}}>
                                        {ele.desc}
                                    </Box>
                                    <Divider />
                                    <Box sx={{marginTop:1, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                        <IconButton variant='outlined' color='secondary'>
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                        <IconButton variant='outlined' color='secondary'>
                                            <CommentIcon />
                                        </IconButton>
                                        <IconButton variant='outlined' color='secondary'>
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton variant='outlined' color='secondary'>
                                            <ShoppingCartIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            )
                        }
                    </Box>
                </>
                :'Loading'
                
            }

        </div>
    )
}
