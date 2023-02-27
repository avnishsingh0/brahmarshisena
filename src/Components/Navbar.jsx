import React from 'react'
import { Box, Flex, Image,Spacer, useMediaQuery, IconButton, Button } from "@chakra-ui/react"
import logo from "../img/logofinal.jpg"
import "../Pages/logo.css"

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
 
} from '@chakra-ui/react'
import {  HamburgerIcon } from '@chakra-ui/icons'
const Navbar = () => {
  const [navMid] = useMediaQuery('(min-width: 800px)')
  return (
<>
<Flex p="10px 10px 0px 40px" pos="sticky" zIndex="50" top="0px"   gap='2' bg="#FFB91D" h={"90px"} >
            <Box>
                 <Image className='zoom' src={logo} style={{borderRadius:"50%",height:"100px",border:"1px solid red", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}   />
            </Box>
            <Spacer/>

<Box >
{ navMid && <Box   display="flex" alignItems='baseline' gap="85px" pt={"20px"} pr={"80px"}>
    <Button  style={{backgroundColor:"#FFB91D",fontFamily:"sans-serif",color:"black"}}  className='zoom' >होम</Button>
    <Button style={{backgroundColor:"#FFB91D",fontFamily:"sans-serif",color:"black"}}  className='zoom'>हमारी उपलब्धियां</Button>
    <Button style={{backgroundColor:"#FFB91D" ,fontFamily:"sans-serif",color:"black"}}  className='zoom'>सदस्य  बने</Button>
    <Button  style={{backgroundColor:"#FFB91D",fontFamily:"sans-serif",color:"black"}}  className='zoom'>आगामी योजना</Button>
    
    
</Box>
}

{ 
!navMid && <Menu>
<MenuButton
  as={IconButton}
  aria-label='Options'
  icon={<HamburgerIcon />}
   variant='outline'
  />
<MenuList bg="black" >
  <MenuItem style={{backgroundColor:"#FFB91D",fontFamily:"sans-serif",color:"black"}}  className='zoom'> होम</MenuItem>
  <MenuItem  style={{backgroundColor:"#FFB91D",fontFamily:"sans-serif",color:"black"}}  className='zoom'>हमारी उपलब्धियां</MenuItem>
  <MenuItem  style={{backgroundColor:"#FFB91D",fontFamily:"sans-serif",color:"black"}}  className='zoom'>सदस्य  बने</MenuItem>
  <MenuItem  style={{backgroundColor:"#FFB91D",fontFamily:"sans-serif",color:"black"}} className='zoom' >आगामी योजना</MenuItem>
  
</MenuList>
</Menu>
}   
</Box>

</Flex>
</>
    
  )
}

export default Navbar