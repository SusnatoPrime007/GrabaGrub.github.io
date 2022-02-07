import { Button } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link';
import React, { useState } from 'react'


export default function CuisinsBar(props) {
    

    return (
        <div>
        <Box sx={{
            display:'flex', 
            justifyContent:'center', 
            alignItems:'center', 
            height:60,
            position:'fixed', 
            top:64, 
            left:0, 
            right:0, 
            zIndex:100,
            background: '#ffffffab',
            backdropFilter:' blur(7px)'
        }}>
            
            {
                props.cuisines
                ?props.cuisines.map((ele,index)=>
                    <Link href={'/cuisine/'+ele.id} key={index}>
                        <Button  color='secondary' onClick={()=>props.setSelectedCuisine(ele.name)}>{ele.name}</Button>
                    </Link>
                    )
                :'Loading'
            }
        </Box>
        </div>
    )
}
